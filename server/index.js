import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors';

import userRoutes from './routes/users.js'


import dotenv from 'dotenv'

dotenv.config();

const app=express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb" , extended: true}))
app.use(cors({
    origin: "*",
  })
);

app.get('/',(req, res) => {
    res.send("This is stack overflow clone API")
})

app.use('/user',userRoutes)

const PORT = process.env.PORT || 5000

const CONNECTION_URL= "mongodb+srv://Ismail:mlpgV16RCDJ1W6nt@stackoverflow.ab2r52z.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT,() => {console.log(`server running on ${PORT}`)}))
    .catch((err) => console.log(err.message))