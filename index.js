const express = require("express");
const app =express();
const {useRouter}=require ("./routes/user");
const 





app.use("/user",useRouter)


app.use(express.json())


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


app.get("purchasedcourse",function(req,res){

    
})





app.get("/course-see",function(req,res){({

})

})

app.listen(3000)