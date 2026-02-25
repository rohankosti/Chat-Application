import user from "../model/user.js";

const storeuser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const usercollection = await user.create(body);
    res.status(200).json({ msg: "Save Sucsesfuuly" });
  } catch (error) {
    console.error(error);
    // 🔥 Duplicate Email Error Handle
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        msg: "Email already registered",
      });
    }
    res.status(500).json({ msg: "User Data Can't Stored Sucsesfuuly" });
  }
};

const getuser = async (req, res) => {
  try {
    const userid = req.user.id;
    // console.log(userid);

    const readuser = await user.findById(userid);
    res.status(200).json(readuser);
  } catch (error) {
    console.error(error);
    res.status(200).json({ msg: "User Cant Find" });
  }
};

export { storeuser, getuser };
