const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const app = express();
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"))



app.listen(3001, () => {
    console.log("Servidor corriendo en el puerto 3001");
});

app.use(express.urlencoded({extended: false}));

app.use("/", routes);
app.use("/detallProduc", routes);
app.use("/register", routes);
app.use("/login", routes);
app.use("/carrito", routes);
app.use("/newProduct", routes)
app.use("/listaProductos", routes);
app.use("/detail/:id", routes)
app.use("/editar/:id", routes)
