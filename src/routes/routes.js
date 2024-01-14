const express = require ('express');
const router = express.Router();
const productController = require ('../controllers/productsController');
const { usersController } = require ("../controllers/usersController")
const multer = require ("multer");
const path = require ("path");
const session = require ('express-session');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'imagen') {
            cb(null, path.join(__dirname, "../../public/img/imgProducts"));
        } else if (file.fieldname === 'profileImage') {
            cb(null, path.join(__dirname, "../../public/img/imgUsers"));
        }
    },
    filename: (req, file, cb) => {
        if (file.fieldname === 'imagen') {
            const newFileName = "product-" + Date.now() + path.extname(file.originalname);
            cb(null, newFileName);
        } else if (file.fieldname === 'profileImage') {
            cb(null, Date.now() + '-' + file.originalname);
        }
    }
});



const upload = multer ({ storage : storage});


router.get("/",productController.home);
router.get("/detallProduc", productController.detalleProducto);
router.get('/carrito', productController.carrito)
router.get('/register', usersController.register);
router.post('/register', usersController.register);
router.post('/register', upload.single('profileImage'), usersController.register);
router.post('/register', usersController.guardarUsuario);
router.post('/register', usersController.create);
router.get('/login', usersController.login);
router.get("/newProduct", productController.nuevo);
router.post("/newProduct", upload.single("imagen"), productController.nuevoProducto);
router.get("/listaProductos", productController.listado);
router.get("/detail/:id",upload.single("imagen"),productController.show);
router.get("/editar/:id", productController.editar);
router.put("/editar/:id", upload.single("imagen"), productController.update);
router.get("/delete/:id", productController.borrar)


module.exports = router;