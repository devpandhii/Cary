const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    verified:{
        type:Boolean,
        default:false,
    },
    verificationToken:String,
    addresses:[
        {
            name:String,
            mobileNo:String,
            houseNo:String,
            street:String,
            city:String,
            country:String,
            postalCode:String,
        }
    ],
    bookings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Booking"
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const User=mongoose.model("User",userSchema);
module.exports=User;