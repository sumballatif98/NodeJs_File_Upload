//............................Running server..............................................
const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
const cors=require('cors')
myRoute=require('./routes/routes');
const app=express();

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());
app.use('',myRoute);

let port=process.env.PORT || 4000;

const server =app.listen(port, function(){
    console.log('Listening on port ' +port);
});



