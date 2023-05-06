const pathReservations = require("tar/lib/path-reservations");

const development = {
  name: "development",
  db: "productDB",
  username: "Admin",
  password: "12345",
  secretKey: "ecart",
};

const production = {
  name: "production",
  db: process.env.DB_NAME,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  secretKey: process.env.SECRET_KEY,
};

module.exports =
  eval(process.env.CHAT_ENGINE_ENVIRONMENT) == undefined
    ? development
    : eval(process.env.CHAT_ENGINE_ENVIRONMENT);