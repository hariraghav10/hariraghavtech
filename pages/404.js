import MessageBox from "../components/elements/MessageBox";
import Heading from '../components/elements/Heading'
import Link from "next/link";
import Head from "next/head";
import g from '../styles/global.module.css'

export default function ErrorPage(){
return(
    <div style={{margin:"5rem 0 0 0",}}>
         <Head>
        <meta name="description" content="About Hari Ragahv, Building FUll Stack Web Apps and Exploring Machine Learning"></meta>
        <title>Hari Raghav | Fullstack Web Dev</title>
        <meta name="robots" content="noindex, follow"></meta>
        <meta name="googlebot" content="noindex, follow"></meta>
        
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
   <Heading>404 | Page Not Found</Heading> 
   <MessageBox
   title='Sorry! the requested page  is not available'
   
   >I suggest you to visit the <Link href='/' className={g.l1}>Home page →</Link></MessageBox>
    </div>
)
}