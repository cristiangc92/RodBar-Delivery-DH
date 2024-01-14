const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

/*const usersController = {
    register:(req, res)=>{
        res.render(path.join(__dirname, "../view/users/register.ejs"))
        const { nombre, apellido, contraseña, email } = req.body;

        bcrypt.hash(contraseña, 10)
            .then((hashedPassword) => {    
            const newUser = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                contraseña: hashedPassword,
                email: req.body.email,
                imagen: req.file ? req.file.filename : null
                };
    
            const users = JSON.parse(fs.readFileSync("../database/users.json", 'utf-8'));
            users.push(newUser);
            fs.writeFileSync("../database/users.json", JSON.stringify(users, null, 2), 'utf-8');
        
            res.redirect('/');
            })

            .catch ((error) => {
            console.error(error);
            res.status(500).send('Hubo un error en el registro del usuario')
            })
    },*/
    const usersController = {
        register: async (req, res) => {
            res.render(path.join(__dirname, "../view/users/register.ejs"))
            register: async (req, res) => {
                try {
                    const { nombre, apellido, contraseña, email } = req.body;
                    const hashedPassword = await bcrypt.hash(contraseña, 10);
        
                    const newUser = {
                        nombre: nombre,
                        apellido: apellido,
                        contraseña: hashedPassword,
                        email: email,
                        imagen: req.file ? req.file.filename : null
                    };
        
                    const users = JSON.parse(fs.readFileSync("../database/users.json", 'utf-8'));
                    users.push(newUser);
                    fs.writeFileSync("../database/users.json", JSON.stringify(users, null, 2), 'utf-8');
        
                    res.redirect('/');
                } catch (error) {
                    console.error(error);
                    res.status(500).send('Error en el registro de usuario');
                }
            }
        },

    login:(req, res)=>{
        res.render(path.join(__dirname, "../view/users/login.ejs"))
    },
    guardarUsuario: (req, res) => {
        console.log(req.body);
        res.redirect('/')
    },
    create: (req, res) => {
        res.render(req.body);
    }
}

module.exports = { usersController : usersController }