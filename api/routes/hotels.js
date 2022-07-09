import express from "express";
import { createHotel, updateHotel, getHotel, getHotels, deleteHotel } from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

// GET  
router.get("/find/:id", getHotel)

// GET ALL
router.get('/', getHotels)

// REMOVE HOTEL
router.delete('/:id', deleteHotel)


export default router;
