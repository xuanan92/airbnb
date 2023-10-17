import { Schema, model } from "mongoose";

const roomsSchema = new Schema({
  location: String,
  rating: Number,
  owner: String,
  date: String,
  price: Number,
});

const Rooms = model("Rooms", roomsSchema);
export default Rooms;
