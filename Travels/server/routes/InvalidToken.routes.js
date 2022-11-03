import express from "express";
import { TokenApi } from "../controllers/invalidToken.controller.js";

const router = express.Router();

router.post('/add', TokenApi().add)

export default router