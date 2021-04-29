const express = require("express");
const routes = require("./config/routes");

const app = express();
routes(app);

app.use(express.json());

const server = app.listen(4000, () =>
  console.log(`
🚀 Server ready at: http://localhost:4000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
