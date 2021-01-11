import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

import TpLogo from '@/assets/svg/TpLogo.svg'

const Header = (props) => {
  const [ session, loading ] = useSession()
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="flex text-nuxt-gray h-7 lg:h-10 z-10 mr-auto"
              >
                <TpLogo className="h-6 lg:h-8 transition-colors duration-300 ease-linear" />
                <span className="text-xl lg:text-2xl font-medium leading-none pl-2 inline-flex justify-center items-center text-green-500">Tam Phan</span>
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {!session && <>
                <li className="flex items-center mr-4 text-yellow-600 font-medium">
                  ✨ Need sign in to view profile ✨✨✨
                </li>
                <li className="flex items-center">
                  <a
                    href={`/login`}
                    className="bg-green-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    onClick={(e) => {
                      e.preventDefault()
                      signIn()
                    }}
                  >
                    Sign in
                  </a>
                </li>
              </>}
              {session && <>
                <li className="flex items-center mr-4 text-gray-900 hover:text-gray-500 font-medium">
                  <Link href="/profile">
                    <a className="flex">
                      {session.user.image && <span style={{backgroundImage: `url(${session.user.image})` }} className="h-7 w-7 bg-cover bg-no-repeat rounded-full mr-2" />}
                      Profile
                    </a>
                  </Link>
                </li>
                <li className="flex items-center">
                  <a
                    href={`/api/auth/signout`}
                    className="bg-yellow-300 text-black active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    onClick={(e) => {
                      e.preventDefault()
                      signOut()
                    }}
                  >
                    Sign out
                  </a>
                </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header 