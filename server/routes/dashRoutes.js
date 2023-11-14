import express from "express";
import verifyJWT from "../middleware/verifyJWT.js";
import { getUserById } from "../controllers/usersController.js";

const router = express.Router();

router.use(verifyJWT);

router.route("/account-settings");

export default router;
