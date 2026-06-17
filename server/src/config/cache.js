const Redis = require("ioredis");

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    retryStrategy(times) {
        // Backoff reconnection attempts to avoid CPU spin, up to 10s delay
        return Math.min(times * 1000, 10000);
    }
});

let hasLoggedError = false;

redis.on("connect", () => {
    console.log("Server is connected successfully to Redis");
    hasLoggedError = false;
});

redis.on("error", (err) => {
    if (!hasLoggedError) {
        console.error("Redis connection error details:", err.message || err);
        hasLoggedError = true;
    }
});

module.exports = redis;