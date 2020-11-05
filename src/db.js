const mongoose = require('mongoose');

const DB = process.env.URLDB;
mongoose.connect(DB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log("Conect to DB")
});