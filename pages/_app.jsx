import React from "react"
import App from 'next/app'
import Head from 'next/head'
import { Provider } from 'next-auth/client'

import LayoutDefault from '@/layouts/default'

import '@/assets/styles/tailwind.css'
import '@/assets/styles/globals.scss'

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`
=========================================================
* TP NextJS
=========================================================

* Website: https://tampm.com
=========================================================
    `)
    document.insertBefore(comment, document.documentElement)
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    const Layout = Component.layout || LayoutDefault

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>TP Next Auth</title>

          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="shortcut icon"
            href='/favicon.ico'
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/apple-icon-167.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/apple-icon-152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/apple-icon-120.png"
          />
        </Head>
        <Provider
          options={{
            clientMaxAge: 0,
            keepAlive: 0
          }}
          session={pageProps.session} >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </>
    )
  }
}