import express from "express";
const app=express();
const port=5000;

app.get("/",(req,res)=>
{
    res.render("project\\client\\src\\index.js");
})
