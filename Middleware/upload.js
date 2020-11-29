//second test

const util = require("util");
const multer = require("multer");
const { copySync } = require('fs-extra');
const maxSize = 2 * 1024 * 1024;


let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/' +req.query.name+ '/');
    //cb(null, __basedir + '/upload/');
  },
  filename: (req, file, cb) => {

    //single file
    //console.log(file.originalname);
    //console.log(req.query.name);
    //console.log(__basedir + '/upload');
    cb(null, file.originalname);


    //multiple files
    // var filename = file.originalname;
    // cb(null, filename);
  },
});

//single file

let uploadFile = multer({
  storage: storage,
  // limits: { fileSize: maxSize },
}).single("file");

//multiple files

// let uploadFile = multer({
//   storage: storage
// }).array("multi-files", 10)


let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;