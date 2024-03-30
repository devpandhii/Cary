const mongoose=require("mongoose");

const driverSchema=new mongoose.Schema({
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
    license: {
        type: String,
        required: true
    },
    vehicle: {
        type: String,
        required: true
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

const Driver=mongoose.model("User",driverSchema);
module.exports=Driver;