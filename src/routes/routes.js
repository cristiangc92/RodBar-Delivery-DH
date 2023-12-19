const express = require ('express');
const productController = require ('../controllers/productsController');
const usersController = require ("../controllers/usersController")
const router = express.Router();

router.get("/",productController.home);
router.get("/detallProduc", productController.detalleProducto);
router.get('/carrito', productController.carrito)
router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get("/newProduct", productController.nuevo)
router.post("newProduct", productController.nuevoProducto)
;



module.exports = router;