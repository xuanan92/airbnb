import dotenv from "dotenv";
dotenv.config();
import path from "path";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import root from "./routes/root.js";
import authRoutes from "./routes/authRoutes.js";
import dashRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import cookieParser from "cookie-parser";
import corsOptions from "./config/corsOptions.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/dbConn.js";
import { logger, logEvents } from "./middleware/logger.js";
const app = express();
const port = process.env.PORT || 5005;

console.log(process.env.NODE_ENV);

connectDB();

app.use(logger);
// app.use(cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", root);
app.use("/auth", authRoutes);
app.use("/rooms", roomRoutes);
app.use("/users", userRoutes);
app.use("/account-settings", dashRoutes);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

// TODO: <>{}() &0& #0# == create log middleware

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log",
  );
});
