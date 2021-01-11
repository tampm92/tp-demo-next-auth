import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: 'tpCredentials',
      name: 'TpCredentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {  label: "Password", type: "password", placeholder: "Password" }
      },
      authorize: async (credentials) => {
        // Add logic here to look up the user from the credentials supplied
        const users = [
          { id: 1, name: 'J Test', email: 'test@example.com', image: 'https://live.staticflickr.com/65535/48991856476_e02e5b2f51_s.jpg', username: 'test', password: '123456' }
        ]

        const user = users.find( user => 
          user.username === credentials.username
          && user.password === credentials.password
        )
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user)
        } else {
          // If you return null or false then the credentials will be rejected
          return Promise.resolve(null)
          // You can also Reject this callback with an Error or with a URL:
          // return Promise.reject(new Error('error message')) // Redirect to error page
          // return Promise.reject('/path/to/redirect')        // Redirect to a URL
        }
      }
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true, 
    
    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens 
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
    // signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    
    // Set to true to use encryption (default: false)
    // encryption: true,

    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  pages: {
    signIn: '/login'
  },
  debug: process.env.ENV === 'development'
}

export default (req, res) => NextAuth(req, res, options)
