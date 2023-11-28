const path = require('path');
const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../view/index.html"));
    },
    detalleProducto:  (req, res) => {
        res.sendFile(path.join(__dirname, "../view/detallProduc.html"));
    },
    register:(req, res)=>{
        res.sendFile(path.join(__dirname, "../view/register.html"))
    },
    login:(req, res)=>{
        res.sendFile(path.join(__dirname, "../view/login.html"))
    },
    carrito:(req, res)=>{
        res.sendFile(path.join(__dirname, "../view/carrito.html"))
    }
    
}

module.exports = controller;
