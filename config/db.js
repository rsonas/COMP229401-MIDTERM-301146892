require('dotenv').config()
const mongoose = require('mongoose');

//i dont know if it an issue with my wifi, but it will not let me connect unless i use the non srv connection string. i have had the same issue on assignment 2
//also not using a .env file for the sake of time as i am making this submission private on github
let ConnectionString = "mongodb://richardsonaislinn_db_user:Testing12345@ac-nkvndxw-shard-00-00.pjptmar.mongodb.net:27017,ac-nkvndxw-shard-00-01.pjptmar.mongodb.net:27017,ac-nkvndxw-shard-00-02.pjptmar.mongodb.net:27017/Midterm?ssl=true&replicaSet=atlas-sx2z9m-shard-0&authSource=admin&appName=Portfolio"

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

module.exports = async function () {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(ConnectionString, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("==== Backend successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}