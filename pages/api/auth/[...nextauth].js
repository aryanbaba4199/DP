import NextAuth from "next-auth"
import Cors from "micro-cors"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const cors = Cors({
  allowMethods: ['GET', 'POST'], // Specify the HTTP methods allowed
});
export const authOptions = {
  

  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbackUrl: "https://dp-sand.vercel.app/api/auth/callback/google"
}

export default NextAuth(authOptions)