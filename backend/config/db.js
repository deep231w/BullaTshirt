const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async ()=>{

    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.error(`Error connecting to MongoDB: ${err.message}`);
        if (error.name === 'MongoNetworkError') {
            console.error('Network error:', error.message);
        } else {
            console.error('Other error:', error.message);
        }
        process.exit(1);
    }
}

module.exports = connectDB;