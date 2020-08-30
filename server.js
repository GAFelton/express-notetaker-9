const express = require("express");
const fs = require("fs");

const app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static('assets'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log("App listening on port:" + PORT);
});
