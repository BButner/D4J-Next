import { Navbar } from 'components/navbar/Navbar'
import 'styles/globals.sass'
// import "prismjs/themes/prism.css"
import 'styles/prism.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}