import Head from 'next/head'
import Image from 'next/image'
import AboutContent from '../components/sections/AboutContent'
import Heading from '../components/elements/Heading'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div style={{margin:"5rem 0 0 0",}}>
      <Head>
        <title>About Hari Raghav</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
      <Heading >A little more About Me</Heading>
      <AboutContent> I mostly rely on the Laravel framework for the backend. In terms of frontend, Nuxt.js is my favorite choice, often in combination with a great CSS framework called TailwindCSS.</AboutContent>
      </div>

      <div style={{margin:"26rem 0"}}>
      <Heading >About the site</Heading>
      <AboutContent>I mostly rely on the Laravel framework for the backend. In terms of frontend, Nuxt.js is my favorite choice, often in combination with a great CSS framework called TailwindCSS.</AboutContent>
      </div>
     
    </div>
  )
}
