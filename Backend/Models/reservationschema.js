import mongoose from "mongoose";
import validator from "validator";
// import isEmail from "validator/lib/isEmail";
 
const reservationschema  = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: [3, "First name should be atleast 3 characters"],
        maxLength: [30, "First name cannot exceed 30 characters!"],
    },
    lastname: {
        type: String,
        required: true,
        minLength: [3, "Last name should be atleast 3 characters"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        required : true,
        validate: [validator.isEmail, "Please enter a valid email address"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number should be atleast 10 characters"],
        maxLength: [10, "Phone number cannot exceed 10 characters!"]
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

export const reservation = mongoose.model("reservation", reservationschema)