require('dotenv').config();
const path = require("path");
const express = require("express");
const app = express();
const routes = require(path.resolve(__dirname, 'src', 'routes', 'routes.js'));
const { default: mongoose } = require("mongoose");

mongoose.connect(process.env.CONNECTIONSTING)
   .then(() => {
      console.log("mongoDB connected");
      app.emit('ok');
   })
   .catch(e => console.warn(e));

app.use(express.urlencoded({ extended: true }));

app.set("views", path.resolve(__dirname, 'src', 'views'));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(routes);

app.on('ok', () => {
   app.listen(3000, () => {
      console.log("http://localhost:3000/");
   });
});
