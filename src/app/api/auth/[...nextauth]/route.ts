import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";
import withAuth from "next-auth/middleware";

const handler = NextAuth(authOptions);
export { handler as POST, handler as GET };
