import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
// INBOX: <>@@() &0& #0# =adding __dirname library=
// const __dirname = path.join(__dirname, "data.json");

const categoriesSchema = new mongoose.Schema({
  id: String,
  title: String,
  image: Array,
});
export default ("Categories", categoriesSchema);

const dataPath = path.join(__dirname, "data.json");
const rawData = fs.readFileSync(dataPath, "utf8");
const data = JSON.parse(rawData);

mongoose.connect("", () => {
  Categories.insertMany(data)
    .then(() => {})
    .catch((error) => {
      console.error(error.message);
    });
});
