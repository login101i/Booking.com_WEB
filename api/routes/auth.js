import express from "express";

import { login, register, logoutUser } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/logout", logoutUser);

export default router;

