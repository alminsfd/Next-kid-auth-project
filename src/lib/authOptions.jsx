import { loginUser } from "@/action/server/auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
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
}

export default authOptions