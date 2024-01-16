function guestMiddleware(req, res, next) {
    if (req.session.usuarioLogueado == undefined){
        next();
        } else {
            res.send('Necesitas loguearte para continuar')
        }
}

module.exports = guestMiddleware;