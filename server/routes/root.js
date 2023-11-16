import express from "express";
import path from "path";
import { getDirName } from "../helpers/dirname.js";
const __dirname = getDirName(import.meta.url);

const router = express.Router();

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

export default router;
