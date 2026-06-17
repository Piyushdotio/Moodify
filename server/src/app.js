const express=require("express")
const app=express()
const cors=require("cors")
const cookieParser=require("cookie-parser")
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(cookieParser())
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.CLIENT_URL,
  process.env.FRONTEND_URL
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
app.use(express.static('./dist'))


const authRoutes=require("./routes/auth.routes")
const songRoutes=require("./routes/song.routes")
app.use("/api/auth",authRoutes)
app.use("/api/songs",songRoutes)
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});


module.exports=app