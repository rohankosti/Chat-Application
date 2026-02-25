import eppress from "express";
import authoraization from "../../middleware/authoraiztion.js";

const router = eppress.Router();

router.get("/Dashboard", authoraization, (req, res) => {
  res.render("Dashboard", { pagetittle: "Dashboard" });
});
router.get("/Login", (req, res) => {
  res.render("Login", { pagetittle: "Login" });
});
router.get("/Error", authoraization, (req, res) => {
  res.render("Error", { pagetittle: "Error" });
});
router.get("/Signup", (req, res) => {
  res.render("Signup", { pagetittle: "Signup" });
});
router.get("/Profile", authoraization, (req, res) => {
  res.render("Profile", { pagetittle: "Profile" });
});
router.get("/Rooms", authoraization, (req, res) => {
  res.render("Rooms", { pagetittle: "Rooms" });
});
router.get("/Logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/Login");
});
router.use((req, res) => {
  res.status(404).render("Error", {
    pagetittle: "404",
    message: "Page Not Found",
  });
});

export default router;
