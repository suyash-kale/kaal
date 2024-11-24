import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
    }),
  ],
});

export { handler as GET, handler as POST };
