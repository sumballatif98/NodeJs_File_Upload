
const util = require("util");
const multer = require("multer");
const { copySync } = require('fs-extra');
const maxSize = 2 * 1024 * 1024;


let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/' +req.query.name+ '/');  // req.query.name has any folder name (new or existing) sent in req body 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
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
