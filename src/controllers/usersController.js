const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const { validationResult }= require('express-validator');

    const usersController = {
        register: (req, res)=>{
            res.render(path.join(__dirname, "../view/users/register.ejs"))
        },

    processRegister: (req, res) => {
        let archivoUser = fs.readFileSync('users.json', { encoding: 'utf-8' });
        let usuarios;
        if (archivoUser.trim() !== '') {
            usuarios = JSON.parse(archivoUser);
        } else {
        usuarios = [];
    }

    const newUser = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contraseña: bcrypt.hashSync(req.body.contraseña, 10),
        email: req.body.email,
        imagen: req.file ? req.file.filename : null
    };

    usuarios.push(newUser);
    let nuevoUsuario = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync('users.json', nuevoUsuario);
    res.redirect('/');
    },

    login: (req, res) => {
        res.render(path.join(__dirname, "../view/users/login.ejs"))
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            let archivoUser = fs.readFileSync('users.json', { encoding: 'utf-8' });
            let usuarios;
            if (archivoUser.trim() !== '') {
                usuarios = JSON.parse(archivoUser);
            } else {
            usuarios = [];
        }
            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.contraseña, usuarios[i].contraseña)) {
                        let usuarioALoguearse = usuarios[i];
                        break;
                    }
                }
            }
                if (usuarioALoguearse == undefined) {
                    return res.render('login', { errors: [
                        {msg: 'Credenciales inválidas'}
                    ]});
                }
                req.session.usuarioLogueado = usuarioALoguearse;
                res.redirect('/');
        } else {
            return res.render('login', { errors: errors.errors});
        }
        res.render(path.join(__dirname, "../view/users/login.ejs"))
    },
}

module.exports = { usersController : usersController }