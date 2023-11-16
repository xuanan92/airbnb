import express from "express";
import {
  getAllRooms,
  getRoomById,
  createNewRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/roomsController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllRooms)
  .get(getRoomById)
  .post(createNewRoom)
  .patch(updateRoom)
  .delete(deleteRoom);
router.route("/:id").get(getRoomById);
export default router;
