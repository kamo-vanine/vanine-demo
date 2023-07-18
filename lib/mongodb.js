// Importing the MongoClient class from the MongoDB Node.js driver.
import { MongoClient } from "mongodb";

// Checking if the environment variable "MONGODB_URI" is missing or invalid.
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

// Storing the MongoDB connection URI from the environment variable.
const uri = process.env.MONGODB_URI;

// Options object for configuring the MongoDB connection (currently empty).
const options = {};

// Declaration of variables to hold the MongoDB client and the client promise.
let client;
let clientPromise;

// Setting up the MongoDB client based on the current environment.
if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global;
  globalWithMongo._mongoClientPromise = undefined;

  // If the global client promise does not exist, create a new client and connect.
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }

  // Storing the client promise in a module-scoped variable for exporting.
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
