const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const db = require("../db/db.json");
// uuidv4();

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        res.json(db);
    })

    app.post("/api/notes", (req, res) => {

        const notePayload = req.body;

        const acceptedKeys = [{
            key: "title",
            // type: "string"
        }, "text"]

        for (const {
            key,
            type
        } of acceptedKeys) {
            if (notePayload[key] === null) {
                // || typeof notePayload[key] !== type
                res.status(400).json({
                    error: `Please provide a ${key} create a note.`
                })

                return;
            }
        }

        const {
            title,
            text
        } = notePayload

        const newNote = {
            "id": uuidv4(), // USE 'uuid'
            "title": title,
            "text": text
        }

        // TODO - USE FS TO WRITE NEW DB ARRAY INTO 'db.json'
        fs.appendFile("./db/db.json", newNote, "utf8", (err, data) => {
            if (err) throw err;
            res.json(data);
        })


    })


};




//when doing put and delete, add a unique id.
//npm package "uuid" generates unique ids.


// module.exports = apiRoutes;