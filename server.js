//............................Running server..............................................
const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
const cors=require('cors')
myRoute=require('./routes/routes');
const app=express();

global.__basedir = __dirname;

//const mongoose=require('mongoose');
//const config=require('./DB');

// mongoose.Promise=global.Promise;
// mongoose.connect(config.DB, { useUnifiedTopology:true, useNewUrlParser:true})
// .then(
//     ()=> { console.log('Database is connected' );},
//     err => { console.log(' Can not connect to database '+err) } 
// );

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());
app.use('',myRoute);

let port=process.env.PORT || 4000;

const server =app.listen(port, function(){
    console.log('Listening on port ' +port);
});

//..............................Server for db storage running........................

// let multer = require('multer');
// let GridFsStorage = require('multer-gridfs-storage');
// let Grid = require('gridfs-stream');
// Grid.mongo = mongoose.mongo;
// // let gfs = Grid(connection.db);
// var gfs;




//let connection = mongoose.connection;
// let multer = require('multer');
// let GridFsStorage = require('multer-gridfs-storage');
// let Grid = require('gridfs-stream');
// Grid.mongo = mongoose.mongo;
// // let gfs = Grid(connection.db);
// var gfs;
// var connection = mongoose.connection;
// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', function() {
//   console.log("Connected!")
  //var mongoDriver = mongoose.mongo;
//   gfs = Grid(connection.db, Grid.mongo);
//     // Setting up the storage element
// let storage = GridFsStorage({
//     url: 'mongodb://localhost:27017/FileUploads',
//     useUnifiedTopology:true, useNewUrlParser:true,
//     gfs : gfs,

//     filename: (req, file, cb) => {
//         let date = Date.now();
//         // The way you want to store your file in database
//         cb(null, file.fieldname + '-' + date + '.'); 
//     },
    
//     // Additional Meta-data that you want to store
//     metadata: function(req, file, cb) {
//         cb(null, { originalname: file.originalname });
//     },
//     root: 'ctFiles' // Root collection name
// });

// // Multer configuration for single file uploads
// let upload = multer({
//     storage: storage
// }).single('file');

//})


// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//     res.append('Access-Control-Allow-Credentials', true);
//     next();
// });




// // Setting up the storage element
// let storage = GridFsStorage({
    
//     gfs : gfs,

//     filename: (req, file, cb) => {
//         let date = Date.now();
//         // The way you want to store your file in database
//         cb(null, file.fieldname + '-' + date + '.'); 
//     },
    
//     // Additional Meta-data that you want to store
//     metadata: function(req, file, cb) {
//         cb(null, { originalname: file.originalname });
//     },
//     root: 'ctFiles' // Root collection name
// });

// // Multer configuration for single file uploads
// let upload = multer({
//     storage: storage
// }).single('file');

// Route for file upload
// app.post('/upload', (req, res) => {
//     upload(req,res, (err) => {
//         if(err){
//              res.json({error_code:1,err_desc:err});
//              return;
//         }
//         res.json({error_code:0, error_desc: null, file_uploaded: true});
//     });
// });


// Route for getting all the files
// app.get('/files', (req, res) => {
//     let filesData = [];
//     let count = 0;
//     gfs.collection('ctFiles'); // set the collection to look up into

//     gfs.files.find({}).toArray((err, files) => {
//         // Error checking
//         if(!files || files.length === 0){
//             return res.status(404).json({
//                 responseCode: 1,
//                 responseMessage: "error"
//             });
//         }
//         // Loop through all the files and fetch the necessary information
//         files.forEach((file) => {
//             filesData[count++] = {
//                 originalname: file.metadata.originalname,
//                 filename: file.filename,
//                 contentType: file.contentType
//             }
//         });
//         res.json(filesData);
//     });
// });

//..............................second test server....................................

// const cors = require("cors");
// const express = require("express");
// const app = express();


// //global.__basedir = __dirname;

// var corsOptions = {
//   origin: "http://localhost:4000"
// };

// app.use(cors(corsOptions));

// const initRoutes = require("./routes/routes");

// app.use(express.urlencoded({ extended: true }));
// app.use('',initRoutes);

// let port = 4000;
// app.listen(port, () => {
//   console.log(`Running at localhost:${port}`);
// });



