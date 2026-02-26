import user from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = await user.findOne({ email: email });

    console.log(User, "sds");
    if (!User) {
      return res.status(404).json({ msg: "User Not Found" });
    }

    if (password !== User.password) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    //jwt create
    const token = jwt.sign(
      {
        id: User._id,
        email: User.email,
        name: User.name,
      },
      process.env.JWT_SECRATE,
      { expiresIn: "1d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.status(200).json({ msg: "Login Sucsesfull", User });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Eroor" });
  }
};

export default login;
