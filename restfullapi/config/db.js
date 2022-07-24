const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Marcani51:marcellus.denta96@cluster0.umbob.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connection to DB Open");
  } catch (error) {
    console.error("Failed to connect DB");
    process.exit(1);
  }
};

module.exports = connectToDb;
