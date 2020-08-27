
var db = require("../db/db.json");

module.exports = (app, fs) => {

    app.get("/api/notes", (req, res) => {
        fs.readFile(db, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        })
    })

    app.post("/api/notes", (req, res) => {
      db.push(req.body);
    //   res.json(db);
      console.log(db);
    })


};


// module.exports = apiRoutes;