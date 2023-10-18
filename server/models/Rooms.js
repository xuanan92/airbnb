import { Schema, model } from "mongoose";

const roomsSchema = new Schema({
  location: {
    type: String,
    default: "Nearby",
  },
  rating: {
    type: Number,
    default: 0,
  },
  owner: {
    type: String,
    default: "Annonymous",
  },
  date: {
    type: String,
    default: new Date(),
  },
  price: {
    type: Number,
    default: 0,
  },
});

const Rooms = model("Rooms", roomsSchema);
export default Rooms;
