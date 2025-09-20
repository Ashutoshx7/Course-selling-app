

const {Router}=require ("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken")
const JWT_ADMIN_PASSWORD = "AFASFASASFSASFASF"

const userRouter=Router();

app.use(express.json())
userRouter.post("/signup",async function(req,res){

    const {email,password,name,lastname}=req.body()

    await userModel.create({
        name:name,
        lastname:lastname,
        email:email,
        password:password,

    })
    res.json({
        message : "you are signin"}
    )



 })


userRouter.post("/login",async function(req,res){
    const {name,password}=req.body();

  
      const user = await userModel.findone({
          email: email,
          password: password
      })
      if (user) {
          const token = jwt.sign({
              id: admin._id
              /// do cookie bassex authentication then this would help here
  
          }, JWT_ADMIN_PASSWORD);
          res.json({ token: token })
      }
      else {
          res.status(403).json({
              message: "incorrect credentials"
  
          })
      }
  
  
      

})
userRouter.post("/purchase-a-couse",function(req,res){
    ({
        
    })

})

module.exports={
    userRouter : userRouter}
