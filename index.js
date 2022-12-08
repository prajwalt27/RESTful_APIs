
import express from 'express';
import routes from './src/routes/Routes.js'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app= express();
const PORT = 3000;


//mongoose connection
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true
});

//bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//serving static fontVariantLigatures: 
app.use(express.static('public'))


routes(app);

app.get('/',(req,res)=>{
    res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT,()=>
 console.log(`Your server is running on port ${PORT}`) 
);
