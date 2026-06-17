const blacklistModel = require("../models/blacklist.model")
const userModel=require("../models/user.model")
const redis=require("../config/cache")
const jwt=require("jsonwebtoken")

async function authUser(req,res,next){
    const token=req.cookies.token
    if(!token){
        return res.status(401).json({
            Message:"token not provided "
        })
    }
    try {
        const isTokenBlacklisted=await redis.get(token)
        if(isTokenBlacklisted){
            return res.status(401).json({
                message:"Invalid token"
            })
        }
    } catch (redisErr) {
        console.error("Redis connection/blacklist check failed:", redisErr.message || redisErr)
    }
    try{
        const decoded=jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        req.user=decoded
        next()
    }
    catch(err){
        return res.status(401).json({
            message:"Invalid token"
        })
    }

}

module.exports={authUser}