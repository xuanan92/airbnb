import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import root from "./routes/root.js";
import userRoutes from "./routes/userRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import corsOptions from "./config/corsOptions.js";
import path from "path";

dotenv.config();

const port = process.env.PORT || 5005;

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", root);
app.use("/rooms", roomRoutes);
app.use("/users", userRoutes);

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

// TODO: <>{}() &0& #0# == create log middleware
mongoose.connect(
  "mongodb+srv://nguyentruongxuananhn:superAnIT01!@cluster0.ytehc68.mongodb.net/Rooms?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
