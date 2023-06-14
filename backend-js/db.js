require("dotenv").config();
const { MongoClient } = require("mongodb");

let dbInstance; // Armazena a instância do banco de dados

async function connect() {
  if (dbInstance) return dbInstance;

  const mongoUrl = process.env.MONGO_URL;

  try {
    const conn = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    dbInstance = conn.db("unifor");
    return dbInstance;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = { connect };
