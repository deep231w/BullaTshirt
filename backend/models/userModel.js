const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }, 
    firebaseuid: {
        type: String,
        required: true,
    },
},{
    timestamps: true // Automatically adds createdAt and updatedAt fields
  })


const User = mongoose.model('User', userSchema);

module.exports = User;