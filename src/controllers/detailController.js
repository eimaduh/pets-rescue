const path = require('path');
const getInfoDatabase = require("../utils/getInfoDatabase");


const detailController = {
    getDetailPage : (req, res) => {
        const animals = getInfoDatabase('animals')
        const id = req.params.id
        const detail = animals.find(animal => animal.id === Number(id))

        res.render('detail', { detail }) ;
    }

}


module.exports = detailController