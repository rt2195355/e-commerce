import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
})


//rest object
const app = express();

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