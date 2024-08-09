import express from "express";
import { createPermission } from "../controller/PermissionController.js";

const router = express.Router();

router.post("/", createPermission);

export default router;