import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GoogleProvider({})],
  // needed when using `npm run preview`
  trustHost: true,
});
