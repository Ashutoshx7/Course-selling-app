const express = require("express");
const app =express();
const mongoose=require("mongoose")
const { userRouter } = require("./routes/user");
const {courseRouter}=require ("./routes/course")
const {adminRouter}= require("./routes/course")





app.use("/user", userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter)
await mongoose.connect("")



function main(){
app.use(express.json())






app.listen(3000)

console.log("hello from port 20000")
}
main()