import '../styles/globals.css'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }) {
  return( 
  
  <div>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
  <ThemeProvider enableSystem = {true} forcedTheme={'light'} >
  <Header></Header>
  <div style={{height:"0px"}}></div>
  <Component {...pageProps} />
  <Footer></Footer>
  </ThemeProvider>
  </div>
  )}

export default MyApp
