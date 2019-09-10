var express = require("express");
var path = require("path");

var app = express();
var PORT = 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = [
    {
        name: "Jarrod",
        link: "insertphotohere",
        scores: [5,4,3,2,1,5,4,3,2,1]
    },
    {
        name: "Ryan",
        link: "insertphotohere",
        scores: [3,2,5,2,3,5,3,4,4,1]
    },
    {
        name: "Mik",
        link: "insertphotohere",
        scores: [4,2,5,3,2,2,5,3,2,1]
    },
    {
        name: "Greg",
        link: "insertphotohere",
        scores: [5,3,2,4,2,4,5,3,3,4]
    },
    {
        name: "Evelin",
        link: "insertphotohere",
        scores: [4,3,5,3,2,1,1,1,3,5]
    },
    {
        name: "Tim",
        link: "insertphotohere",
        scores: [2,3,1,3,2,2,4,5,3,5]
    },

];

    //html routes (need to move to htmlroutes.js)
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/home.html"));
    });

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


//api routes (need to move to apiroutes.js)
app.post("/api/friends", function (req, res) {
    var newfriend = req.body;
    friends.push(newfriend);
    res.json(newfriend);
    console.log("New friend added!");
});

app.get("/api/friends", function (req, res) {
    res.json(friends);
})




// require("./routing/htmlRoutes")(app);
// require("./routing/apiRoutes")(app);


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

