const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.URI
const DB_name = process.env.DB_NAME
export const Collectins = {
     Products: 'products',
     Users: 'users',
}
const client = new MongoClient(uri, {
     serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
     }
});

export const dbConnected = (cmane) => {
     return client.db(DB_name).collection(cmane)
}