import express from "express";
import { createProfile } from "../controller/ProfileController.js";

const router = express.Router();

router.post("/", createProfile);

export default router;