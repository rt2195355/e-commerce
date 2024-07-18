import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';


//configure environment
dotenv.config({
    path: './.env'
})

//database configure
connectDB();

//rest object
const app = express();


//middlewares
app.use(express.json())
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);


//rest api
app.get('/', (req, res) => {
    res.send({
        message: "Welcome to the My app"
    })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on : ${PORT}`);
})