const {Schema,default:mongoose,}=require("mongoose");
const mongoose = require("moongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.Type.ObjectId;
mongoose.connect("")



const userSchema= Schema({
    email:{type:String,unique:true},
    password:Number,
    id:ObjectId,
    name:String,
    lastname:String,
    
});


const adminSchema=Schema({
    email:{type:String,unique:true},
    password:Number,
    id:ObjectId,
    name:String,
    lastname:String,

})



const courseSchema=Schema({
    title:String,
    discription:String,
    price:Number,
    Image_url:String,
    creator_id:ObjectId

})

const purchaseSchema=Schema({
    userId:ObjectId,
    Date:Number,
    courseid:ObjectId,
})


const userModel= mongoose.model("user",userSchema);


const adminModel= mongoose.model("admin",adminSchema);
const courseModel=mongoose.model("course",courseSchema);

const purchaseModel=mongoose.model("purchase",purchaseSchema)
module.exports=({
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
})