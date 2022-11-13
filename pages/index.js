import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/sections/Intro'
import Tech from '../components/sections/Tech'
import g from '../styles/global.module.css'

export default function Home() {
  return (
    <div className={g.Cont}>
      <Head>
        <meta name="description" content="Portfolio and About Hari Raghav - Full Stack Web Dev and ML/DL"></meta>
        <title>Hari Raghav - Portfolio Site</title>
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

      <Intro></Intro>
      <div id="tech" style={{height:"30px",margin:"5rem 0",border:"0px solid red",}}></div>
      <Tech></Tech>
      
    </div>
  )
}
