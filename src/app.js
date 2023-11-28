const express = require("express");
const path = require("path");
const routes = require("./routes/index");
const app = express();

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

app.listen(3001, () => {
  console.log("Servidor corriendo en el puerto 3001");
});

app.use("/", routes);
