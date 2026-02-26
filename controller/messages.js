import message from "../model/message.js";

const msg = async (req, res) => {
  try {
    const usermsg = await message.find().sort({ createdAt: 1 });
    res.status(200).json(usermsg);
  } catch (error) {
    res.status(500).json({ msg: "Sent Not Sent" });
    console.error(error);
  }
};

export default msg;
