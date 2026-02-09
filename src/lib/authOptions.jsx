
export const authOptions = {
     // Configure one or more authentication providers
     providers: [

          CredentialsProvider({
               name: 'Credentials',
               credentials: {
                    email: { label: "email", type: "email", placeholder: "user@gmail.com" },
                    password: { label: "Password", type: "password" }
               },
               async authorize(credentials, req) {

                    return null
               }
          })
     ],
}