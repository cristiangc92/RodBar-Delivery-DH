function authMiddleware(req, res, next) {
    if (req.session.usuarioLogueado == undefined){
        next();
        } else {
            res.send('Bienvenido a RodBar')
        }
}

module.exports = authMiddleware;