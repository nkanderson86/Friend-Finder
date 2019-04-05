// set up an 'express' server
let express = require("express");

let app = express();

// set PORT to be used in our listener
let PORT = process.env.PORT || 8080;

// sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//declare routes for our server
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// start server listening to PORT declared above
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
