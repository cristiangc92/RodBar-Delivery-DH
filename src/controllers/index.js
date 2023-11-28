const path = require('path');
const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../view/index.html"));
    },
}

module.exports = controller;
