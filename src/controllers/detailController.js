const database = require('../database/models')


const detailController = {
       getById: (req, res) => {
        database.Pet.findByPk(req.params.id)
         .then(detail => {
          res.render('detail', {
           detail
          })
         })
       }

}


module.exports = detailController