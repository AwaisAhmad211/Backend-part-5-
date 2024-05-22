const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.get("/",(req,res)=>{
    res.send("Working")
})

app.get("/profile",(req,res)=>{
    res.send("Profile page is working")
})
app.listen(3000)