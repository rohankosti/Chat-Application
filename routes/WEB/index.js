import eppress from "express";

const router = eppress.Router();

router.get("/Dashboard", (req, res) => {
  res.render("Dashboard", { pagetittle: "Dashboard" });
});
router.get("/Login", (req, res) => {
  res.render("Login", { pagetittle: "Login" });
});
router.get("/Error", (req, res) => {
  res.render("Error", { pagetittle: "Error" });
});
router.get("/Signup", (req, res) => {
  res.render("Signup", { pagetittle: "Signup" });
});
router.get("/Profile", (req, res) => {
  res.render("Profile", { pagetittle: "Profile" });
});
router.get("/Rooms", (req, res) => {
  res.render("Rooms", { pagetittle: "Rooms" });
});

export default router;
