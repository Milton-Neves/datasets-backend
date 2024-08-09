import { StatusCodes } from "http-status-codes";
import Profile from "../models/Profile.js"

export async function createProfile(req, res) {
    try {
        const { name, permissions } = req.body;
        const newProfile = new Profile({ name, permissions })
        await newProfile.save()
        res.status(StatusCodes.CREATED).json(newProfile)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message })
    }
}