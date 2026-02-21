import eppress from 'express'

const router = eppress.Router();

router.get("/Dashboard",(req,res)=>{
    res.render("Dashboard",{pagetittle:"Dashboard"})
})
router.get("/Login",(req,res)=>{
    res.render("Login",{pagetittle:"Login"})
})

export default router;