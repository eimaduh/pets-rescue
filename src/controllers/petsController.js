const database = require('../database/models')

const petsController = {
  getPetsPage: (req, res) => {
    database.Pet.findAll()
    .then(animals => {
      return res.render('pets', { animals })
    })
  }
}

module.exports = petsController