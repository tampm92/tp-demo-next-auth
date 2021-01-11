import Header from '@/layouts/components/Header'
import Footer from '@/layouts/components/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout