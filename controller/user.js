import user from "../model/user.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAILUSER,
    pass: process.env.EMAILPASS,
  },
});

const storeuser = async (req, res) => {
  try {
    const body = req.body;

    const usercollection = await user.create(body);

    // ✅ 2. SMTP EMAIL (NEW PART)
    await transporter.sendMail({
      from: " process.env.EMAILUSER",
      to: [process.env.EMAILUSER,body.email],
      subject: "Welcome to Convoxa 🚀",
      html: `
<div style="margin:0; padding:5; background:#0f172a; font-family:Arial, sans-serif;">
  <div style="max-width:600px; margin:40px auto; background:#1e293b; border-radius:12px; overflow:hidden; box-shadow:0 0 20px rgba(99,102,241,0.3);">
    
    <!-- Header -->
    <div style="background:linear-gradient(90deg,#6366f1,#8b5cf6); padding:25px; text-align:center;">
      <h1 style="color:white; margin:0; font-size:28px; letter-spacing:1px;">
        Convoxa 💬
      </h1>
      <p style="color:#e0e7ff; margin-top:8px; font-size:14px;">
        Real-Time Conversations. Seamless Experience.
      </p>
    </div>

    <!-- Body -->
    <div style="padding:30px; color:#e2e8f0;">
      <h2 style="margin-top:0;">Hey There 👋</h2>
      
      <p style="font-size:15px; line-height:1.6; color:#cbd5e1;">
        Welcome to <b style="color:#818cf8;">Convoxa</b>!  
        Your account has been successfully created.
      </p>

      <div style="background:#0f172a; padding:15px; border-radius:8px; margin:20px 0;">
        <p style="margin:5px 0;"><b>Email:</b> ${body.email}</p>
        <p style="margin:5px 0;"><b>Username:</b> ${body.name}</p>
      </div>

      <p style="font-size:14px; color:#94a3b8;">
        Start connecting, create rooms, and chat in real-time with your friends and teams.
      </p>

      <!-- Button -->
      <div style="text-align:center; margin-top:30px;">
        <a href="http://localhost:3000/login"
           style="background:linear-gradient(90deg,#6366f1,#8b5cf6);
                  color:white;
                  padding:12px 25px;
                  text-decoration:none;
                  border-radius:6px;
                  font-weight:bold;
                  display:inline-block;">
          Start Chatting 🚀
        </a>
      </div>

      <p style="margin-top:30px; font-size:13px; color:#64748b;">
        If you did not create this account, please ignore this email.
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#0f172a; text-align:center; padding:15px; font-size:12px; color:#64748b;">
      © 2026 Convoxa. All rights reserved.
    </div>

  </div>
</div>
`,
    });
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
