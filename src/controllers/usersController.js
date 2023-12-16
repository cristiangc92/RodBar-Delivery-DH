const path = require('path');
const usersController = {
    register:(req, res)=>{
        res.render(path.join(__dirname, "../view/users/register.ejs"))
    },
    login:(req, res)=>{
        res.render(path.join(__dirname, "../view/users/login.ejs"))
    }
    
}

module.exports = usersController;