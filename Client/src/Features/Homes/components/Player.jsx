import { useEffect, useRef, useState } from "react";
import { useSong } from "../hooks/useSong";

function formatTime(value) {
    if (!Number.isFinite(value)) {
        return "0:00";
    }

    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${seconds}`;
}

function Player() {
    const audioRef = useRef(null);
    const { loading, song } = useSong();
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ currentTime, setCurrentTime ] = useState(0);
    const [ duration, setDuration ] = useState(0);
    const [ volume, setVolume ] = useState(1);
    const [ isMuted, setIsMuted ] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) {
            return undefined;
        }

        setIsPlaying(false);
        setCurrentTime(0);
        setDuration(0);
        audio.pause();
        audio.load();

        if (!song?.url) {
            return undefined;
        }

        const tryAutoPlay = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (error) {
                setIsPlaying(false);
            }
        };

        tryAutoPlay();

        return undefined;
    }, [ song?.url ]);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) {
            return undefined;
        }

        const handleTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
        const handleLoadedMetadata = () => setDuration(audio.duration || 0);
        const handleEnded = () => {
            setIsPlaying(false);
            setCurrentTime(0);
        };
        const handlePause = () => setIsPlaying(false);
        const handlePlay = () => setIsPlaying(true);

        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("ended", handleEnded);
        audio.addEventListener("pause", handlePause);
        audio.addEventListener("play", handlePlay);

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            audio.removeEventListener("ended", handleEnded);
            audio.removeEventListener("pause", handlePause);
            audio.removeEventListener("play", handlePlay);
        };
    }, []);

    async function togglePlayback() {
        const audio = audioRef.current;

        if (!audio || !song?.url) {
            return;
        }

        if (audio.paused) {
            try {
                await audio.play();
            } catch (error) {
                setIsPlaying(false);
            }
            return;
        }

        audio.pause();
    }

    function skipBy(seconds) {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        const nextTime = Math.min(
            Math.max(audio.currentTime + seconds, 0),
            duration || audio.duration || 0
        );

        audio.currentTime = nextTime;
        setCurrentTime(nextTime);
    }

    function handleSeek(event) {
        const audio = audioRef.current;
        const nextTime = Number(event.target.value);

        if (!audio) {
            return;
        }

        audio.currentTime = nextTime;
        setCurrentTime(nextTime);
    }

    function handleVolumeChange(event) {
        const audio = audioRef.current;
        const newVolume = Number(event.target.value);

        if (!audio) {
            return;
        }

        audio.volume = newVolume;
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
    }

    function toggleMute() {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        if (isMuted) {
            audio.volume = volume || 0.5;
            setIsMuted(false);
        } else {
            audio.volume = 0;
            setIsMuted(true);
        }
    }

    return (
        <section className="player-bar">
            <audio ref={audioRef} preload="metadata">
                {song?.url ? <source src={song.url} /> : null}
            </audio>

            <div className="player-bar__container">
                {/* Left section: Poster and Title */}
                <div className="player-bar__left">
                    {song?.posterUrl ? (
                        <img src={song.posterUrl} alt={song.title || "Song poster"} className="player-bar__poster" />
                    ) : (
                        <div className="player-bar__poster" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                        </div>
                    )}
                    <div>
                        <h3 className="player-bar__title">
                            {song?.title || "No song loaded"}
                        </h3>
                        <p className="player-bar__subtitle">
                            {song?.mood ? `Mood: ${song.mood}` : "Waiting for expression scan"}
                        </p>
                    </div>
                </div>

                {/* Center section: Media controls and progress */}
                <div className="player-bar__center">
                    <div className="player-bar__controls">
                        {/* Skip Back */}
                        <button
                            type="button"
                            onClick={() => skipBy(-10)}
                            className="player-bar__btn-secondary"
                            disabled={!song?.url}
                            title="Rewind 10 seconds"
                            aria-label="Rewind 10 seconds"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/></svg>
                        </button>
                        
                        {/* Play / Pause */}
                        <button
                            type="button"
                            onClick={togglePlayback}
                            className="player-bar__btn-primary"
                            disabled={!song?.url}
                            title={isPlaying ? "Pause" : "Play"}
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "2px" }}><path d="M8 5v14l11-7z"/></svg>
                            )}
                        </button>

                        {/* Skip Forward */}
                        <button
                            type="button"
                            onClick={() => skipBy(10)}
                            className="player-bar__btn-secondary"
                            disabled={!song?.url}
                            title="Forward 10 seconds"
                            aria-label="Forward 10 seconds"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg>
                        </button>
                    </div>

                    <div className="player-bar__progress-container">
                        <span className="player-bar__time">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            step="0.1"
                            value={Math.min(currentTime, duration || 0)}
                            onChange={handleSeek}
                            disabled={!song?.url}
                        />
                        <span className="player-bar__time">{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Right section: Volume control */}
                <div className="player-bar__right">
                    <button onClick={toggleMute} className="player-bar__btn-secondary" aria-label={isMuted ? "Unmute" : "Mute"}>
                        {isMuted ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                        )}
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        style={{ width: "80px" }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Player;
