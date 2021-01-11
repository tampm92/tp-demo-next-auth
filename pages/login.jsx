import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { providers, signIn } from 'next-auth/client'

import CleanLayout from '@/layouts/clean'
import SvgIcon from '@/components/common/SvgIcon'

const LoginPage = ({ providers }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleChangeUsername = (e) => setUsername(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)
  const router = useRouter()
  const query = router.query

  const tpSignIn = (provider, params = {}) => {
    params.callbackUrl = query.callbackUrl ?? '/'
    signIn(provider, params)
  }

  return (
    <main className="bg-gray-100 h-screen font-mono">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="lg:w-1/3 md:w-1/2">
          <h1 className="text-4xl mb-6 text-center text-green-500 font-bold">Login Next-Auth</h1>
          <div className="border-green-500 p-8 border-t-4 bg-white mb-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="font-bold text-gray-600 block mb-2">Username</label>
              <input value={username} onChange={handleChangeUsername}
                type="text" className="block appearance-none w-full bg-white border border-gray-300 hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Your Username" />
            </div>

            <div className="mb-6">
              <label className="font-bold text-gray-600 block mb-2">Password</label>
              <input value={password} onChange={handleChangePassword}
                type="password" className="block appearance-none w-full bg-white border border-gray-300 hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Your Password" />
            </div>

            <div className="flex flex-col space-y-4">
              <button onClick={() => tpSignIn('tpCredentials', { username, password })}
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400
                flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300
                rounded-md group hover:bg-gray-800 focus:outline-none text-white"
              >
                <span className="text-xl font-bold">Login</span>
              </button>
            </div>

            <div className="relative my-10 h-px bg-gray-300">
              <div className="absolute left-0 top-0 flex justify-center w-full -mt-3">
                <span className="bg-white px-4 text-gray-500">Or Login Social</span>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              {Object.values(providers).map(provider => provider.type !== 'credentials' && 
                <button key={provider.name} onClick={() => tpSignIn(provider.id)}
                  className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400
                  flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300
                  rounded-md group hover:bg-gray-800 focus:outline-none text-white"
                >
                  <SvgIcon svgName={provider.id} className="h-5" />
                  <span className="text-xl font-bold">Sign in with {provider.name}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

LoginPage.getInitialProps = async (context) => {
  return {
    providers: await providers(context)
  }
}

LoginPage.layout = CleanLayout

export default LoginPage