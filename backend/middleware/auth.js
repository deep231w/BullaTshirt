const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const auth = (req , res , next) => {
    const authHeader = req.headers('Authorization');
    if(!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.replace('Bearer','');
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try{ 
        const decoded =jwt.verify({ token}, process.env.JWT_SECRET)
        req.userId= decoded.userId;
        next(); 
    }
    catch(e){
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = auth;
