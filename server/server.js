const mongoose = require("mongoose");
const app = require("./index");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });
const port = process.env.PORT;
const host = process.env.HOST;
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.error(err));

app.listen(port, host, () => {
  console.log(`Server listening on host ${host} : port ${port}.`);
});
