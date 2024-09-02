const express = require('express');
const connectDB  = require('./config/db');
console.log(connectDB);
const app = express();
const userRoute= require('./routes/user');
const productRoute = require('./routes/product');
const cors = require('cors');
app.use(cors());

connectDB();

app.use(express.json());

app.use('/api/product',productRoute);
app.use('/api/user',userRoute)


app.get('/', (req, res) => {
    res.send("Welcome")
})

app.listen(3000 , (err, res) => {
    console.log("listening on port 3000");
})

