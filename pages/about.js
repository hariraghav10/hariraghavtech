import Head from 'next/head'
import Image from 'next/image'
import AboutContent from '../components/sections/AboutContent'
import Heading from '../components/elements/Heading'
import BlackCont from '../components/elements/BlackCont'
import styles from '../styles/Home.module.css'
import Profile2 from '../public/p1 dark1.png'
import g from '../styles/global.module.css'
import AboutMe from '../components/Source/AboutMe.mdx'
import AboutSite from '../components/Source/AboutSite.mdx'

export default function About() {
  const ImageURL='https://res.cloudinary.com/hariraghavtech/image/upload/v1668259053/hariraghavtech/V1/profile-image.png'
  
  const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)
  const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
  
  return (
    <div style={{margin:"5rem 0 0 0",}}>
      <Head>
        <meta name="description" content="About Hari Ragahv, Building FUll Stack Web Apps and Exploring Machine Learning"></meta>
        <title>Hari Raghav | Fullstack Web Dev</title>
        <meta name="robots" content="index, follow"></meta>
        <meta name="googlebot" content="index, follow"></meta>
        
        <link rel="apple-touch-icon" sizes="57x57" href="/icons3/apple-icon-57x57.png"></link>
        <link rel="apple-touch-icon" sizes="60x60" href="/icons3/apple-icon-60x60.png"></link>
        <link rel="apple-touch-icon" sizes="72x72" href="/icons3/apple-icon-72x72.png"></link>
        <link rel="apple-touch-icon" sizes="76x76" href="/icons3/apple-icon-76x76.png"></link>
        <link rel="apple-touch-icon" sizes="114x114" href="/icons3/apple-icon-114x114.png"></link>
        <link rel="apple-touch-icon" sizes="120x120" href="/icons3/apple-icon-120x120.png"></link>
        <link rel="apple-touch-icon" sizes="144x144" href="/icons3/apple-icon-144x144.png"></link>
        <link rel="apple-touch-icon" sizes="152x152" href="/icons3/apple-icon-152x152.png"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons3/apple-icon-180x180.png"></link>
        <link rel="icon" type="image/png" sizes="192x192"  href="/icons3/android-icon-192x192.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons3/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="96x96" href="/icons3/favicon-96x96.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons3/favicon-16x16.png"></link>
        <link rel="manifest" href="/icons3/manifest.json"></link>
       

      </Head>
      <div >
      <Heading >A little more About Me</Heading>
      <AboutContent>
        <Image src={ImageURL} alt={'About the full stack web developer, Hari Raghav of Hariraghavtech.com'} width={5000}
        height={5000} className={g.AboutImage} placeholder='blur'  blurDataURL={rgbDataURL(255, 51, 0)}></Image>
        <AboutMe></AboutMe>
        </AboutContent>
      </div>

      <div style={{margin:"8rem 0"}}>
      <Heading >About the Site</Heading>
      <AboutContent>
      <AboutSite></AboutSite>
      </AboutContent>
      </div>
     
    </div>
  )
}
