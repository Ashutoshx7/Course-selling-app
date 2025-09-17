

const {Router}=require ("express");

const userRouter=Router();


app.post("/signup",function(req,res){
    res.json({
        message : "you are signin"}
    )



 })


app.post("/login",function(req,res){
    res.json({

    })

})
app.post("/purchase-a-couse",function(req,res){
    ({
        
    })

})

module.exports={
    userRouter : userRouter}
