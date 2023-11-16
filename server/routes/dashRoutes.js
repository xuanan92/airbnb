import express from "express";
import { getAllUsers } from "../controllers/usersController.js";
// import verifyJWT from "../middleware/verifyJWT.js";
// import { getUserById } from "../controllers/usersController.js";

const router = express.Router();

// router.use(verifyJWT);

router.route("/account-settings");

export default router;
