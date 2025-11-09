// const { MongoClient } = require('mongodb');
// const config = require('./dbConfig.json');

// const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
// const client = new MongoClient(url);
// const db = client.db('startup');
// const userCollection = db.collection('user');
// const pantryCollection = db.collection('pantry');
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);

let db;
let userCollection;
let pantryCollection;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('startup');
    userCollection = db.collection('user');
    pantryCollection = db.collection('pantry');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Unable to connect to MongoDB:', err);
    process.exit(1);
  }
}

connectDB();


// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
   try {
     await db.command({ ping: 1 });
     console.log(`Connect to database`);
   } catch (ex) {
     console.log(`Unable to connect to database with ${url} because ${ex.message}`);
     process.exit(1);
   }
 })();


function getUser(email) {
   return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
   return userCollection.findOne({ token: token });
}
 
 async function addUser(user) {
   await userCollection.insertOne(user);
}
 
 async function updateUser(user) {
   await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addPantry(pantry) {
   await pantryCollection.insertOne(pantry);
}

 module.exports = {
   pantryCollection,
   getUser,
   getUserByToken,
   addUser,
   updateUser,
   addPantry,
 }