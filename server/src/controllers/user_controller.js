const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

var controller = {};
// Constructor
module.exports = function (app) {
  _app = app;
  return controller;
};

controller.find = async function (req, res) {
  const users = await prisma.user.findMany();
  res.json(users);
};
