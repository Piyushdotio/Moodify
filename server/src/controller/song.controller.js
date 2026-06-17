const songModel = require("../models/song.model")
const id3 = require("node-id3")
const storageService = require('../services/storage.sevice')

async function uploadSong(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "song file is required"
            })
        }

        const songBuffer = req.file.buffer
        const { mood } = req.body
        const tags = id3.read(songBuffer) || {}
        const title = tags.title || req.file.originalname
        const posterBuffer = tags.image?.imageBuffer

        if (!posterBuffer) {
            return res.status(400).json({
                message: "album art not found in song metadata"
            })
        }

        const [ songFile,posterFile]  = await Promise.all([
            storageService.uploadFile({
            buffer: songBuffer,
            filename: title,
            folder: "/cohort-2/moodify/songs"
        }),

            storageService.uploadFile({
            buffer: posterBuffer,
            filename: `${title}.jpeg`,
            folder: "/cohort-2/moodify/posters"
        })
        ])
        

        const song = await songModel.create({
            title,
            url: songFile.url,
            posterUrl: posterFile.url,
            mood
        })

        return res.status(201).json({
            message: "song created Successfully",
            song
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "failed to upload song"
        })
    }
}
async function getSong(req,res){
    let {mood}=req.query

    if (mood) {
        mood = mood.toLowerCase();
    }

    const songs = await songModel.find({ mood });
    let song = null;
    if (songs.length > 0) {
        const randomIndex = Math.floor(Math.random() * songs.length);
        song = songs[randomIndex];
    }

    if (!song) {
        // Map to existing moods in DB as fallbacks
        let fallbackMood;
        if (mood === "neutral") {
            fallbackMood = "happy";
        } else if (mood === "angry") {
            fallbackMood = "sad";
        } else if (mood === "surprised" || mood === "suprised") {
            fallbackMood = "happy";
        }

        if (fallbackMood) {
            const fallbackSongs = await songModel.find({ mood: fallbackMood });
            if (fallbackSongs.length > 0) {
                const randomIndex = Math.floor(Math.random() * fallbackSongs.length);
                song = fallbackSongs[randomIndex];
            }
        }

        // If still no song found, return a random song from the DB as a last resort
        if (!song) {
            const allSongs = await songModel.find({});
            if (allSongs.length > 0) {
                const randomIndex = Math.floor(Math.random() * allSongs.length);
                song = allSongs[randomIndex];
            }
        }
    }

    res.status(200).json({
        message:"Song Fetched Successfully",
        song
    })
}

module.exports = { uploadSong,getSong }
