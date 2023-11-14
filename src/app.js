const express=require('express')
const path=require('path')

const app=express()

const publicPath=path.resolve(__dirname,'../public')
app.use(express.static(publicPath))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'view/home.html'))
})

app.listen(3001,()=>{
    console.log('Servidor corriendo en el puerto 3001');
})

app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "view/register.html"))
})

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "view/login.html"))
})

app.get("/carrito", (req, res)=>{
    res.sendFile(path.join(__dirname, "view/carrito.html"))
})