const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const app=express();
const connectToDb=require('./db/db');
const userRoutes=require('./routes/user.routes');
const cookieparser=require('cookie-parser');
const captainRoutes=require('./routes/captain.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());



app.get('/',(req,res)=>{
    res.send('Hello Roshan');
});

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports=app;