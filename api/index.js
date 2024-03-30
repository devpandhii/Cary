const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const User=require("./models/user")

mongoose.connect("mongodb+srv://Cary:Cary@cluster0.v4nqyd5.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error ", err);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
const sendVerificationEmail=async(email,verificationToken)=>{
    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"errroorrrr.404@gmail.com",
            pass:'dhvm wnub yjvv sjqw'
        }
    })
    const mailOptions={
        from:"amazon.com",
        to:email,
        subject:"Email Verification",
        text:`Please click the following link to verify your email: https://cary.onrender.com/verifyUser/${verificationToken}`
    }

    try{
        await transporter.sendMail(mailOptions);
    }
    catch(err){
        console.log("Email ",err)
    }
}

app.post("/registerUser",async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"Email already registered."})
        }

        const newUser=new User({name,email,password});
        newUser.verificationToken=crypto.randomBytes(20).toString('hex');

        await newUser.save();

        await sendVerificationEmail(newUser.email,newUser.verificationToken);
        res.status(200).json({message:"User Created and Verified Successfully"});
    }
    catch(error){
        console.log("Error registering user ",error);
        res.status(500).json({message:"Registration failed"});
    }
})

app.get("/verifyUser/:token",async(req,res)=>{
    try{
        const token=req.params.token;

        const user=await User.findOne({verificationToken:token});
        if(!user){
            return res.status(404).json({message:"Invalid Verification Token"});
        }

        user.verified=true;
        user.verificationToken=undefined;
        await user.save();
        return res.status(200).json({message:"Email verified successully"});
    }
    catch(err){
        res.status(500).json({message: "Email Verification Failed"})
    }
})

const generateSecretKey=()=>{
    const secretKey=crypto.randomBytes(32).toString("hex");
    return secretKey;
}

const secretKey=generateSecretKey();
app.post('/loginUser',async(req,res)=>{
    try{
        const {email,password}=req.body;

        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({message:"Invalid email"})
        }
        if(user.password!==password){
            return res.status(401).json({message:"Invalid Password"});
        }
        //generate token
        const token=jwt.sign({userId:user._id},secretKey);
        const u={
            userid:user._id,
            name:user.name,
            email:user.email
        }
        console.log(u);
        res.status(200).json({token,u});
    }
    catch(err){
        res.status(500).json({message:"Login Failed"})
    }
});