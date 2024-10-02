const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://neyazmak:k6wuSmMCF1Od1QN8@devcluster.rutsd.mongodb.net/devTinder"
  );
};
module.exports = connectDB;
