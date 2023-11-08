import express from "express";
import {
  getAllRooms,
  getRoomById,
  createNewRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/roomsController.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

router
  .route("/")
  .get(getAllRooms)
  .post(createNewRoom)
  .patch(updateRoom)
  .delete(deleteRoom);
router.route("/:id").get(getRoomById);
export default router;
