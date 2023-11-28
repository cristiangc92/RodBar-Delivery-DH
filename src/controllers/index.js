const path = require('path');
const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../view/index.html"));
    },
    detalleProducto:  (req, res) => {
        res.sendFile(path.join(__dirname, "../view/detallProduc.html"));
    },
    
}

module.exports = controller;
