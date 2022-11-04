const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    lowercase: true,
    unique: [true, "User is already present"],
  },
  balance: {
    type: Number,
    default: 100,
  },
  address: String,
  age: Number,
  gender: {
    type: String,
    enum: ["male", "female", "others"],
  },
  isFreeAppUser: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);







// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// // String, Number
// // Boolean, Object/json, array