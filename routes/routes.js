

const formidable = require('formidable');
var fs = require('fs-extra');       //File System - for file manipulation

const express = require("express");
const uploadRoutes = express.Router();
const controller = require("../controller/file.controller");

uploadRoutes.get("/files", controller.getListFiles);
uploadRoutes.post("/upload", controller.upload);
uploadRoutes.get("/files/:name", controller.download);

module.exports=uploadRoutes;
