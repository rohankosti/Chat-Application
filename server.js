import express from 'express';
import expressLayouts from "express-ejs-layouts";
import connectdb from './config/db.js';
import APIROUTES from './routes/API/index.js';
import WEBROUTES from './routes/WEB/index.js';
import ejs from 'ejs'


const app = express();

// app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//ejs setup
app.set("view engine","ejs")
app.set("views","views")



//API routes
app.use(APIROUTES)
//WEB routes
app.use(WEBROUTES)
//MongoDB routes
connectdb()


app.use((req, res) => {
  res.status(404).render("Error", {
    pagetittle: "404",
    message: "Page Not Found"
  });
});

app.listen(3000,()=>{
  console.log(`http://localhost:3000/signup`);
  
})