import express from "express";

import { dashboardInfo } from "../controllers/dashboardInfo.js";

const router = express.Router();

router.get("/dashboardInfo", dashboardInfo);

export default router;
