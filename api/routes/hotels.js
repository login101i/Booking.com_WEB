import express from "express";
import {
  createHotel,
  updateHotel,
  getHotel,
  getHotels,
  deleteHotel,
  countByCity,
  countByType
} from "../controllers/hotel.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getHotels);

// REMOVE HOTEL
router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
