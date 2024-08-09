import { StatusCodes } from "http-status-codes";
import Permission from "../models/Permission.js"

export async function createPermission(req, res) {
    try {
        const { name, description, key } = req.body;
        const newPermission = new Permission({ name, description, key })
        await newPermission.save()
        res.status(StatusCodes.CREATED).json(newPermission)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message })
    }
}