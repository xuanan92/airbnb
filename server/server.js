import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import Rooms from "./models/Rooms.js";

const port = process.env.PORT || 5005;

let app = express();

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

app.get("/api/rooms", async (req, res) => {
  await Rooms.find()
    .then((rooms) => res.status(200).json(rooms))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ messsage: "fetching error" });
    });
});
app.get("/api/rooms/:roomId", async (req, res) => {
  const { roomId } = req.params;
  await Rooms.findOneById(roomId)
    .then((room) => res.status(200).json(room))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ messsage: "fetching error" });
    });
});
app.post("/api/rooms", async (req, res) => {
  const room = req.body;
  await Rooms.create(room)
    .then((newRoom) => res.status(200).json(newRoom))
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error creating room" });
    });
});
app.post("/api/rooms/roomId", async (req, res) => {
  const { roomId } = req.body;
  await Rooms.findByIdAndDelete(roomId);
  await Rooms.find()
    .then(() => res.status(200).json())
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: "Error creating room" });
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
