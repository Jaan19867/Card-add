const mongoose = require("mongoose")

// connecting with db

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conect to DataBase"))
  .catch(() => console.log("ERROR connecting to database"))

// card Schema

const cardSchema = new mongoose.Schema({
  name: String,
  age: String,
  College_Name: String,
  description: String,
  gitUser: String,
  imgUrl: String,
 
})

const Card=mongoose.model("Card",cardSchema);
module.exports=Card
