import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import User from "../models/User.js"

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        res.status(401).json("message : User not exist");
        return
    }

    if (!await bcrypt.compare(password, user.password)) {
        res.status(401).json("message : Password error");
        return

    }
    const token = jwt.sign({ userID: user._id }, process.env.SECRET, { expiresIn: "2h" })
    res.status(200).json({token})
}