let friendData = require("../data/friends");

module.exports = function(app) {
  // get request, returns all freinds in array
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  //   post request, addeds new friends to array from survey
  app.post("/api/friends", function(req, res) {
    friendData.push(req.body);
  });
};
