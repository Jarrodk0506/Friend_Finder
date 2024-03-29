var express = require("express");

var app = express();
var PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/app"));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);



app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

