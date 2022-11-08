const express=require('express')
const Otpuser=require("../model/Otpuser")
const usermodel=require("../model/userSchema")
const userController=require('../controller/userController')
// const nodemailer=require("../controller/nodemailer")
const {uservalidate,verifytoken}=require("../middleware/user")
const userRouter=express()
userRouter.post("/add",uservalidate,userController.newuser)
userRouter.get("/list",verifytoken,userController.userlist)
userRouter.post('/login',userController.userlogin)
userRouter.post("/OtpGenerate",userController.Otpemail)
userRouter.post("/changepassword",userController.ChangePassword)
module.exports=userRouter