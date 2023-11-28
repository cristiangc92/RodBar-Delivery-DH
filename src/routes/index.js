const express = require ('express');
const controller = require ('../controllers/index');
const router = express.Router();

router.get("/",controller.home);
router.get("/detallProduc", controller.detalleProducto);
router.get('/register', controller.register);
router.get('/login', controller.login);
router.get('/carrito', controller.carrito);



module.exports = router;