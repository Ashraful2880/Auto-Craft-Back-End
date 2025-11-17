const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pxp8q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
let client;

async function connectDB() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
}

function getDb() {
  if (!client) {
    throw new Error("MongoDB client is not initialized. Call connectDB() first.");
  }
  return client.db("carCollections");
}

module.exports = { connectDB, getDb };
