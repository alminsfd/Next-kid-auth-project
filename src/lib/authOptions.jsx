import { loginUser } from "@/action/server/auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { Collectins, dbConnected } from "./dbconnect";
const authOptions = {
     // Configure one or more authentication providers
     providers: [

          CredentialsProvider({
               name: 'Credentials',
               credentials: {
                    // email: { label: "email", type: "email", placeholder: "user@gmail.com" },
                    // password: { label: "Password", type: "password" }
               },

               async authorize(credentials, req) {

                    const res = await loginUser(credentials)
                    return res


               }
          }),
          GoogleProvider({
               clientId: process.env.GOOGLE_CLIENT_ID,
               clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
     ],
     callbacks: {
          async signIn({ user, account, profile, email, credentials }) {
               console.log("signIn callback:", { user, account, profile, email, credentials });

               const isExits = await dbConnected(Collectins.Users).findOne({
                    email: user.email,
                    provider: account.provider
               })
               if (isExits) {
                    return true
               }

               const newUser = {
                    email: user.email,
                    name: user.name,
                    provider: account.provider,
                    image: user.image,
                    role: "user"
               }
               await dbConnected(Collectins.Users).insertOne(newUser)
               return true
          },
          // async redirect({ url, baseUrl }) {
          //      return baseUrl
          // },
          // async session({ session, user, token }) {
          //      return session
          // },
          // async jwt({ token, user, account, profile, isNewUser }) {
          //      return token
          // }

     }
}

export default authOptions