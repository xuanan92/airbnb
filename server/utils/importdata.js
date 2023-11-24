import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { getDirName } from "../helpers/dirname.js";
import Rooms from "../models/Rooms.js";
import dotenv from "dotenv";
dotenv.config();

const dataPath = path.join(getDirName(import.meta.url), "roomsitems.json");
const rawData = fs.readFileSync(dataPath, "utf8");
const data = JSON.parse(rawData);

mongoose
  .connect(
    "mongodb+srv://nguyentruongxuananhn:superAnIT01!@cluster0.ytehc68.mongodb.net/AirbnbTweak?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => {
    return Rooms.insertMany(data);
  })
  .then(() => {
    console.log("Data imported successfully");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error(error.message);
    mongoose.connection.close();
  });
