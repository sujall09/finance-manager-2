import jwt from "jsonwebtoken";

export const verifyJWT = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied" });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // console.log(req.user.id)
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};