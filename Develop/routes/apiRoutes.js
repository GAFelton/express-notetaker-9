
var db = require("../db/db.json");

const apiRoutes = (app, fs) => {

    app.get(db, (req, res) => {
        fs.readFile(db, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        })
    })

};

module.exports = apiRoutes;