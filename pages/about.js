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
      <AboutContent> I'm Alex, a guy in his twenties living in Leipzig, Germany. Already at young age, computers impressed me so much that I wanted to know more about them. Now, I'm a self-taught developer who runs his own company and studies CS in the meantime.When developing web apps, I mostly rely on the Laravel framework for the backend. In terms of frontend, Nuxt.js is my favorite choice, often in combination with a great CSS framework called TailwindCSS.Can't see parts of your tech-stack on that list? Don't worry! I use the appropriate tech stack that fits the project's specifications and requirements.</AboutContent>
      </div>

      <div style={{margin:"26rem 0"}}>
      <Heading width="100%">About the site</Heading>
      <AboutContent> I'm Alex, a guy in his twenties living in Leipzig, Germany. Already at young age, computers impressed me so much that I wanted to know more about them. Now, I'm a self-taught developer who runs his own company and studies CS in the meantime.When developing web apps, I mostly rely on the Laravel framework for the backend. In terms of frontend, Nuxt.js is my favorite choice, often in combination with a great CSS framework called TailwindCSS.Can't see parts of your tech-stack on that list? Don't worry! I use the appropriate tech stack that fits the project's specifications and requirements.</AboutContent>
      </div>
     
    </div>
  )
}
