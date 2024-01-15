const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');



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
    }

            /*bcrypt.hash(contraseña, 10)
            .then((hashedPassword) => {    
            const newUser = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                contraseña: hashedPassword,
                email: req.body.email,
                imagen: req.file ? req.file.filename : null
                };*/

    /*processLogin:(req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let usersJson = fs.readFileSync('users.json', {encoding: utf-8})
            let users;
            if(usersJson == '') {
                users = [];
            } else {
                users = JSON.parse(usersJson);
            }
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.contraseña, users[i].contraseña)) {
                        let usarioALoguearse = users[i];
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
        } else {
            return res.render('login', { errors: errors.errors});
        }
        res.render(path.join(__dirname, "../view/users/login.ejs"))
    },
    guardarUsuario: (req, res) => {
        console.log(req.body);
        res.redirect('/')
    },
    create: (req, res) => {
        res.render(req.body);    }*/
}

module.exports = { usersController : usersController }