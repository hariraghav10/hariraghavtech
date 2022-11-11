import Head from 'next/head'
import Image from 'next/image'
import AboutContent from '../components/sections/AboutContent'
import Heading from '../components/elements/Heading'
import BlackCont from '../components/elements/BlackCont'
import styles from '../styles/Home.module.css'
import Profile2 from '../public/p1 dark1.png'
import g from '../styles/global.module.css'

export default function About() {
  return (
    <div style={{margin:"5rem 0 0 0",}}>
      <Head>
        <title>About Hari Raghav</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
      <Heading >A little more About Me</Heading>
      <AboutContent>
        <Image src={Profile2} className={g.AboutImage}></Image>
        <p class="has-line-data" data-line-start="1" data-line-end="2">I am <b>Hari Raghav</b>, passionate coder</p>  
        <br></br>
        <p class="has-line-data" data-line-start="1" data-line-end="2">Learning and working with <b>Web Development</b> technologies and tools with predominant interest in Javascript. The go to stack contains <i>React JS, Next JS, Express JS, Mongo DB</i> and others. Quit fascinated around the ever evolving JS frameworks.</p>
        <br></br>
        <p class="has-line-data" data-line-start="3" data-line-end="4">Working with <i>Machine Learning</i> and <i>Deep Learning</i> models mainly for <b>Natural Language Processing</b>  applications</p>
        <br></br>
        <p class="has-line-data" data-line-start="3" data-line-end="4">Exploring the <b>web3</b> concepts especially around <i>smart contracts</i> and <i>decentralised domain systems</i>.</p>
        <br></br>
        <p class="has-line-data" data-line-start="5" data-line-end="6">Currently, pursuing <b>Electrcial &amp; Electronic Engg</b> in the final year of B.Tech in Amrita Vishwa Vidyapeetham in <i>Tamil Nadu, India</i></p>
        <br></br>
        <p class="has-line-data" data-line-start="7" data-line-end="8">When away from coding, might be with <b>music</b> and <b>movies</b></p>
        <br></br></AboutContent>
      </div>

      <div style={{margin:"8rem 0"}}>
      <Heading >About the Site</Heading>
      <AboutContent>
      <p class="has-line-data" data-line-start="12" data-line-end="13"><i>hariraghavtech.com</i> is my portfolio site built using <b>Next JS</b> and hosted with <b>Vercel</b> but currently in  upgradation.</p>
      </AboutContent>
      </div>
     
    </div>
  )
}
