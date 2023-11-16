import express from "express";
import { createNewUser, getAllUsers } from "../controllers/usersController.js";
// import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

// router.use(verifyJWT);
router.route("/").get(getAllUsers).post(createNewUser);

export default router;
