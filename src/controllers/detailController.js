const path = require('path');
const getInfoDatabase = require("../utils/getInfoDatabase");
const animals = getInfoDatabase('animals');


const detailController = {
    getDetailPage : (req, res) => {
        res.render('detail', { animals }) ;
    }

}


module.exports = detailController