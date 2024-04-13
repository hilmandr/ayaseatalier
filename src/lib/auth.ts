import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axiosInstance from "./axios-instance";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (
            credentials?.username == "admin" &&
            credentials.password == "admin"
          ) {
            const user: User = { id: "" };
            return user;
          }
          return null;
        } catch (error) {
          throw new Error("something went wrong");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session = token as any;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
