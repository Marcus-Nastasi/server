const homeModel = require('../models/homeModel.js');

function sendDb(req, res, next) {
   homeModel.create({
      nome: req.body.nome,
      local: req.body.local,
      email: req.body.email,
      tel: req.body.tel
   })
   .then((d) => console.log(d)).catch(e => console.warn(e));
   next();
}

module.exports = sendDb;
