const {Router}=require("express");
const {adminModel}=require("../")

const adminRouter=Router();



adminRouter.post("/signup",function(req,res){
   
})



adminRouter.post("/login",function(req,res){

    res.json({
        message:"you are loged in "
    })

})

adminRouter.get("/content",function(req,res){

})


adminRouter.delete("/delete",function(req,res){

})



module.exports=({
    adminRouter:adminRouter,
})