import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;

  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 1000 }
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    const objects = await Promise.all(
      cities.map((city) => {
        return Hotel.find({ city: city });
      })
    );
    res.status(200).json({ list, objects });
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartamentCount = await Hotel.countDocuments({ type: "apartament" });
    const willaCount = await Hotel.countDocuments({ type: "willa" });
    const domCount = await Hotel.countDocuments({ type: "dom" });
    const motelCount = await Hotel.countDocuments({ type: "motel" });

    res.status(200).json([
      { type: "hotele", count: hotelCount },
      { type: "apartamenty", count: apartamentCount },
      { type: "willle", count: willaCount },
      { type: "domy", count: domCount },
      { type: "motele", count: motelCount }
    ]);
  } catch (err) {
    next(err);
  }
};

// export const countByCity = async (req, res, next) => {
//   try {
//     const poznanCity = await Hotel.countDocuments({ city: "poznań" });
//     const warszawaCity = await Hotel.countDocuments({ city: "warszawa" });
//     const wloclawekCity = await Hotel.countDocuments({ city: "włocławek" });
//     const krakowCity = await Hotel.countDocuments({ city: "kraków" });
//     const gdanskCity = await Hotel.countDocuments({ city: "gdańsk" });

//     res.status(200).json([
//       { type: "poznań", count: poznanCity },
//       { type: "warszawa", count: warszawaCity },
//       { type: "włocławek", count: wloclawekCity },
//       { type: "kraków", count: krakowCity },
//       { type: "gdańsk", count: gdanskCity }
//     ]);
//   } catch (err) {
//     next(err);
//   }
// };
