const HomePage = () => {
  return (
    <>
      <section className="header bg-green-700 relative items-center flex pt-24 pb-8">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="text-white pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl">
                TP Next-Auth
              </h2>
              <h4 className="mt-2 text-2xl leading-relaxed text-gray-300 font-bold">
                Create a Next.js app
              </h4>
              <pre>{`
npx create-next-app
# or
yarn create next-app
              `}</pre>

              <h4 className="mt-2 text-2xl leading-relaxed text-gray-300 font-bold">
                Prepare social app
              </h4>
              <ul>
                <li>
                  <a href="https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-an-oauth-app" target="_blank" 
                    className="text-gray-800 font-bold"
                  >👉 Github</a>
                </li>
                <li>
                  <a href="https://blog.logrocket.com/using-authentication-in-next-js/" target="_blank"
                    className="text-gray-800 font-bold"
                  >👉 Google</a>
                </li>
                <li>
                  <a href="https://developers.facebook.com/docs/facebook-login/web" target="_blank"
                    className="text-gray-800 font-bold"
                  >👉 Facebook</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <section className="relative items-center flex pt-6 pb-16">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h4 className="mt-4 text-2xl leading-relaxed text-gray-900 font-bold">
                Simple Setup
              </h4>

              <h4 className="mt-4 text-xl leading-relaxed text-gray-900 font-bold">
                - Add `.env.local`
              </h4>
              <pre className="bg-gray-200 px-4 rounded-md">{`
ENV=development
NEXTAUTH_URL=http://localhost:3000
SECRET=
FACEBOOK_ID=
FACEBOOK_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_ID=
GOOGLE_SECRET=
              `}</pre>

              <h4 className="mt-4 text-xl leading-relaxed text-gray-900 font-bold">
                - Add `pages\api\auth\[...nextauth].js`
              </h4>
              <pre className="bg-gray-200 px-4 rounded-md">{`
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, options)
              `}</pre>

              <h4 className="mt-4 text-xl leading-relaxed text-gray-900 font-bold">
                - Update `pages/index.js`
              </h4>
              <pre className="bg-gray-200 px-4 rounded-md">{`
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
  </>
}
              `}</pre>

              <h4 className="my-8 text-2xl leading-relaxed text-green-600 font-bold">
              👏👏👏 Let Enjoy!!!
              </h4>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage