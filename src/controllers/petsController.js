const getInfoDatabase = require("../utils/getInfoDatabase")
const animals = getInfoDatabase('animals')

const petsController = {
  getPetsPage: (req, res) => {
    return res.render('pets', { animals })
  }
}

module.exports = petsController