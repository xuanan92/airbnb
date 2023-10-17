import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import Rooms from "./models/Rooms.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
// TODO: <>{}() &0& #0# == create log middleware
// db setup
mongoose.connect(
  "mongodb+srv://nguyentruongxuananhn:superAnIT01!@cluster0.ytehc68.mongodb.net/Rooms?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.get("/", async (req, res) => {
  await Rooms.find()
    .then((rooms) => res.json(rooms))
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
