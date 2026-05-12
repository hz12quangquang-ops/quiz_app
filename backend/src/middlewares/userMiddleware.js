const userMiddleware = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(403).json({
      success: false,
      message: "Access denied. User only.",
    });
  }

  next();
};

export default userMiddleware;
