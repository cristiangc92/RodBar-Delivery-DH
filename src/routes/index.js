const express = require ('express');
const controller = require ('../controllers/index');
const router = express.Router();

router.get("/",controller.home);
router.get("/detallProduc", controller.detalleProducto);


module.exports = router;