import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import User from "../models/User.js";

export const dashboardInfo = async (req, res, next) => {
  try {
    const users = await User.find();
    const hotels = await Hotel.find();
    const rooms = await Room.find();

    res.status(200).json({ users, hotels, rooms });
  } catch (err) {
    next(err);
  }
};
