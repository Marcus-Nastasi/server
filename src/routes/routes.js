const path = require("path");
const express = require("express");
const routes = express.Router();
const homeController = require('../controllers/homeController.js');
const obgController = require("../controllers/obgController.js");
const reqMiddleware = require('../middlewares/reqMiddleware.js');

routes.get("/", homeController.pgInicial);
routes.post("/obg", reqMiddleware, obgController.pgObg);

module.exports = routes;
