

const {Router}=require ("express");

const userRouter=Router();


userRouter.post("/signup",function(req,res){
    res.json({
        message : "you are signin"}
    )



 })


userRouter.post("/login",function(req,res){
    res.json({

    })

})
userRouter.post("/purchase-a-couse",function(req,res){
    ({
        
    })

})

module.exports={
    userRouter : userRouter}
