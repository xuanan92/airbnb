import expressAsyncHandler from "express-async-handler";
import Rooms from "../models/Rooms.js";
export const getAllRooms = expressAsyncHandler(async (req, res) => {
  const rooms = await Rooms.find().lean();
  // if no room found
  if (!rooms?.length) {
    return res.status(400).json({ message: "No rooms found" });
  }
  return res.json(rooms);
});
export const getRoomById = expressAsyncHandler(async (req, res) => {
  // TODO: <>@@() &0& #0# =params in server is builtin and get that to know id=
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "No room has that id found" });
  }
  const room = await Rooms.findById(id).exec();
  return res.status(200).json(room);
});
export const createNewRoom = expressAsyncHandler(async (req, res) => {
  const { location } = req.body;
  if (!location) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // check if duplicate room
  const duplicate = await Rooms.findOne({ title }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Duplicate rooms title" });
  }
  // create new room and store user
  const room = await Rooms.create({ location });
  if (room) {
    // Created
    return res.status(201).json({ message: "New room created" });
  } else {
    return res.status(400).json({ message: "Invalid room data received" });
  }
});
// TODO: <>@@() &0& #0# =need to fix updateRoom and deleteRoom=
export const updateRoom = expressAsyncHandler(async (req, res) => {
  const { location } = req.body;
  if (!location) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // check if duplicate room
  const duplicate = await Rooms.findOne({ title }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Duplicate rooms title" });
  }
  // create new room and store user
  const room = await Rooms.create({ location });
  if (room) {
    // Created
    return res.status(201).json({ message: "New room created" });
  } else {
    return res.status(400).json({ message: "Invalid room data received" });
  }
});
export const deleteRoom = expressAsyncHandler(async (req, res) => {
  const { location } = req.body;
  if (!location) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // check if duplicate room
  const duplicate = await Rooms.findOne({ title }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Duplicate rooms title" });
  }
  // create new room and store user
  const room = await Rooms.create({ location });
  if (room) {
    // Created
    return res.status(201).json({ message: "New room created" });
  } else {
    return res.status(400).json({ message: "Invalid room data received" });
  }
});
