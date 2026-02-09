'use server'

import bcrypt from 'bcryptjs';
import { Collectins, dbConnected } from "@/lib/dbconnect"

export const postUser = async (payload) => {
     const { name, email, password } = payload;

     if (!name || !email || !password) {
          return { success: false, message: "Missing fields" };
     }

     const isExits = await dbConnected(Collectins.Users).findOne({ email });
     if (isExits) {
          return { success: false, message: "User already exists" };
     }

     const newUser = {
          provider: "credentials",
          name,
          email,
          password: await bcrypt.hash(password, 10),
          role: "user",
          createdAt: new Date().toISOString(),
     };

     const result = await dbConnected(Collectins.Users).insertOne(newUser);

     return {
          success: result.acknowledged,
          insertedId: result.insertedId?.toString(),
     };
};



