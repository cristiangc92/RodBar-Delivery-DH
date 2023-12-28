const express = require ('express');
const productController = require ('../controllers/productsController');
const usersController = require ("../controllers/usersController")
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, "../../public/img/imgProducts"))
    },
    filename: (req, file, cb)=>{
        const newFileName = "product-" + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})

const upload = multer({ storage });

router.get("/",productController.home);
router.get("/detallProduc", productController.detalleProducto);
router.get('/carrito', productController.carrito)
router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get("/newProduct", productController.nuevo);
router.post("/newProduct", upload.single("imagen"), productController.nuevoProducto);
router.get("/listaProductos", productController.listado);
router.get("/detail/:id",upload.single("imagen"),productController.show);
router.get("/editar/:id", productController.editar);
router.put("/editar/:id", upload.single("imagen"), productController.update);
router.get("/delete/:id", productController.borrar)



module.exports = router;