import express from "express";

const app=express();
const port=3000;

app.get("/",(res)=>{
  res.send("hello world")
});

app.listen(3000, ()=>{
  console.log(`server runing on port ${port}`);
})