// const express = require('express');
// let Files = require('../model/filedb');
// const fileUpload = require('express-fileupload');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const _ = require('lodash');
// const uploadRoutes=express.Router();

const formidable = require('formidable');
// var path = require('path');     //used for file path
var fs = require('fs-extra');       //File System - for file manipulation


// var fs_ = require('fs');

// var app = express();
// app.use(busboy());

//........................................................................

// working 1st
// uploadRoutes.route('/upload').post(function (req,res){
//   //creating a directory
//   //   fs_.mkdir('tmp', { recursive: true }, (err) => {
//   //     if (err) throw err;
//   // })

//   //uploading single file

//   const form = formidable({ multiples: true });
 
//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       next(err);
//       return;
//     }
//     console.log('before renaming path :'+ files.file.path);  

//     fs.rename(files.file.path,'../backend/upload/'+files.file.name, function(err) {
//       if (err)
//           throw err;
//         console.log('renaming path complete :'+ files.file.name);  
//       });
//       res.json({ fields, files });
//   });

// });
//....................................................................................
//Uploading multiple files
// var form = new formidable.IncomingForm(),
//     files = [],
//     fields = [];

// form.uploadDir = '../backend/upload/';

// form
//   .on('field', function(field, value) {
//     console.log(field, value);
//     fields.push([field, value]);
//   })
//   .on('file', function(field, file) {
//     console.log(field, file);
//     files.push([field, file]);
//   })
//   .on('end', function() {

//     files.forEach(element=>{
//       element.forEach(value=>{
//         fs.rename(value.path,'../backend/upload/'+value.name, function(err) {
//               if (err)
//                   throw err;
//                 console.log('renaming path complete :'+ value.name);  
//               });

//       });
//     });

//     console.log('-> upload done');
//     res.json({ fields, files });
//     //res.writeHead(200, {'content-type': 'text/plain'});
//     // res.write('received fields:\n\n '+util.inspect(fields));
//     // res.write('\n\n');
//     // res.end('received files:\n\n '+util.inspect(files));
//   });
//   form.parse(req);





    // var fstream;
    // fstream = fs.createWriteStream(__dirname + '/backend/upload/' + files.file.name);
                // files.file.pipe(fstream);
                // fstream.on('close', function () {    
                // console.log("Upload Finished of " + files.file.name);  
                // });


    // console.log({fields, files});
    // res.json({ fields, files });
   //});

//......................................................................................
//working 2nd   
// // var express = require('express');
// // var _router = express.Router();
// var multer = require('multer');
// // var path = require('path');


// var store = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null, '../backend/upload/');
//     },
//     filename:function(req,file,cb){
//         cb(null, Date.now()+'.'+file.originalname);
//     }
// });


// var upload = multer({storage:store}).single('file');

// uploadRoutes.post('/upload', function(req,res,next){
//     upload(req,res,function(err){
//         if(err){
//             return res.status(501).json({error:err});
//         }
//         //do all database record saving activity
//         return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
//     });
// });
//.................................................................................

//second test

const express = require("express");
const uploadRoutes = express.Router();
const controller = require("../controller/file.controller");

uploadRoutes.get("/files", controller.getListFiles);
uploadRoutes.post("/upload", controller.upload);
uploadRoutes.get("/files/:name", controller.download);


// let uploadRoutes = (app) => {
//   router.post("/upload", controller.upload);
//   router.get("/files", controller.getListFiles);
//   router.get("/files/:name", controller.download);

//   app.use(router);
// };
//...................................................................................

module.exports=uploadRoutes;
