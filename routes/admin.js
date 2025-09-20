const { Router } = require("express");

const { usermodel, userModel } = require("../db");
const jwt = require("jsonwebtoken")
const JWT_USER_PASSWORD = "AFASFASASFSASFASF"
const { adminModel } = require("../")
const adminRouter = Router();
app.use(express.json());



adminRouter.post("/signup", async function (req, res) {

    const { email, password, name, lastname } = req.body;



    await adminModel.create({
        email: email,
        password: password,
        name: name,
        lastname: lastname,
    })

    res.json({
        message: "signup successful"
    })
})



adminRouter.post("/login", async function (req, res) {




    const { email, password } = req.body();


    const user = await adminModel.findone({
        email: email,
        password: password
    })
    if (admin) {
        const token = jwt.sign({
            id: admin._id
            /// do cookie bassex authentication then this would help here

        }, JWT_USER_PASSWORD);
        res.json({ token: token })
    }
    else {
        res.status(403).json({
            message: "incorrect credentials"

        })
    }


    res.json({
        message: "you are loged in "
    })

})

adminRouter.get("/content", function (req, res) {

})


adminRouter.delete("/delete", function (req, res) {

})



module.exports = ({
    adminRouter: adminRouter,
})