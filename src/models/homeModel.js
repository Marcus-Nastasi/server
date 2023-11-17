const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
   nome: String,
   local: String,
   email: String,
   tel: String
});

const homeModel = mongoose.model('Home', homeSchema);

module.exports = homeModel;
