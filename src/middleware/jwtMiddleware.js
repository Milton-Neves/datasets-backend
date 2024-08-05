import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split("")[1]
        const decoded = jwt.verify(token, process.env.SECRET)
        req.userId = decoded
        next()
    } catch (error) {
        res.status(401).json({ message: "User not autorized" })
        returns
    }
}

export default verifyToken