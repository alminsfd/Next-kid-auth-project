import { loginUser } from "@/action/server/auth"
import CredentialsProvider from "next-auth/providers/credentials"
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
          })
     ],
}

export default authOptions