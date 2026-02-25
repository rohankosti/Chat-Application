import jwt from "jsonwebtoken";

const authoraization = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/Login");
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRATE);
    req.user = decode;
    next();
  } catch (error) {
    console.error(error);
    return res.redirect("/Login");
  }
};

export default authoraization;
