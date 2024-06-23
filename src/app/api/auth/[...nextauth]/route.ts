import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) {
          console.error('No credentials provided');
          throw new Error('No credentials provided');
        }

        try {
          const formData = new URLSearchParams();
          formData.append('username', credentials.username);
          formData.append('password', credentials.password);

          const res = await fetch("http://127.0.0.1:8000/token", {
            method: 'POST',
            body: formData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          });

          if (!res.ok) {
            const errorDetail = await res.text();
            console.error('Error fetching token:', {
              status: res.status,
              statusText: res.statusText,
              detail: errorDetail
            });
            throw new Error(`Failed to fetch token. Status: ${res.status} ${res.statusText}. Details: ${errorDetail}`);
          }

          const user = await res.json();
          console.log('Fetched user:', user);

          if (user) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.image,
              token: user.token
            };
          } else {
            console.error('No user data returned:', user);
            throw new Error('No user data returned from the server.');
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error('Authorization error:', error.message);
            throw new Error(`Authorization failed: ${error.message}. Please check the server logs for more details.`);
          } else {
            console.error('Unknown authorization error:', error);
            throw new Error('Authorization failed due to an unknown error. Please check the server logs for more details.');
          }
        }
      }
    })
  ],
  pages: {
    error: '/auth/error'
  }
});

export { handler as GET, handler as POST };
