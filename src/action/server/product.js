'use server'

import { ObjectId } from "mongodb"

const { dbConnected, Collectins } = require("@/lib/dbconnect")

export const getProducts = async () => {
     const res = await dbConnected(Collectins.Products).find().toArray()
     return res
}

export const getProductById = async (id) => {
     if (id.length !== 24) {
          return {}
     }
     const query = { _id: new ObjectId(id) }
     const res = await dbConnected(Collectins.Products).findOne(query)
     if (!res) return {};
     const { _id, ...rest } = res;
     return { ...rest, id: res._id.toString() || {} }
}