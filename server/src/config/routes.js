module.exports = function (app) {
  var user = require("../controllers/user_controller")(app);
  console.log("setting up routes");
  app.get("/user", user.find);
  return app;
};
