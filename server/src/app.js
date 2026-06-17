const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.CLIENT_URL,
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// Serve frontend build
app.use(express.static(path.join(__dirname, "../dist")));

// Routes
const authRoutes = require("./routes/auth.routes");
const songRoutes = require("./routes/song.routes");

app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);

// React/Vite SPA fallback
app.get("/.*/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

module.exports = app;