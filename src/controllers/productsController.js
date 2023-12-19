const path = require('path');
const productsController = {
    home: (req, res) => {
        res.render(path.join(__dirname, "../view/products/index.ejs"));
    },
    detalleProducto:  (req, res) => {
        res.render(path.join(__dirname, "../view/products/detallProduc.ejs"));
    },
    carrito:(req, res)=>{
        res.render(path.join(__dirname, "../view/products/carrito.ejs"))
    },
    nuevo: (req, res)=>{
        res.render(path.join(__dirname, "../view/products/newProduct.ejs"))
    },
    nuevoProducto: (req, res)=>{

    }
}

module.exports = productsController;
