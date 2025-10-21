import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/bugtrackr", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB connection error:", err));

app.use("/api/tasks", taskRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
