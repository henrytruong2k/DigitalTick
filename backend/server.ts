import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

// Database
import "./config/database";

// Routes
app.use("/api", routes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
