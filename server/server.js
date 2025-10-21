import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";
import dotnev from "dotenv";
const app = express();

app.use(cors());
app.use(express.json());
dotnev.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB connection error:", err));

app.use("/api/tasks", taskRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
