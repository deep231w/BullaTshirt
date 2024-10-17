const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Initialize Express App
const app = express();

// Middleware
app.use(cors({
     origin: 'http://localhost:5173',
    credentials:true
     })); // Allow frontend origin
app.use(express.json()); // To parse JSON bodies

app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    
    next();
});

// Connect to Database
connectDB();

// Routes
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');

app.use('/api/product', productRoute);
app.use('/api/user', userRoute);

// Root Route
app.get('/', (req, res) => {
    res.send("Welcome to the API");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
