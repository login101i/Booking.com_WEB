import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers
} from "../controllers/user.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in and you can delete all accounts");
});

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", getUsers);

export default router;
