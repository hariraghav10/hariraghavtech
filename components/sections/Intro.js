import Heading from "../elements/Heading"
import Link from "next/link"
import Image from 'next/image'
import Profile from '../../public/p1.png'
import Profile2 from '../../public/p1 dark1.png'
import g from '../../styles/global.module.css'
import { useState } from "react"
import { useTheme } from 'next-themes'
export default function Intro(){
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const { resolvedTheme } = useTheme()

  const ImageUrl = 'https://res.cloudinary.com/hariraghavtech/image/upload/v1668258556/hariraghavtech/V1/intro-image.png'
    return(

        <div 
        style={{
           border:"0px solid red",
             
             justifyContent:"center",
             width:"100%",
             
             }}
        >
        <div  className={g.IntroContent}>
           
           <div
           style={{
            border:"0px solid red",
           }}
           className={g.IntroText}
           >
            < h1 color="grey" align="left" size="2rem" className={g.IntroHeading}>Aspiring to make industry-level <br></br>techs and apps  <span
     style={{
    color:"#CA0000",
    fontWeight:"900",
    fontSize:"2rem"
     }} className={g.animtext1}> .</span></h1>
            <h1
            
            className={g.Name}
            >Hari Raghav</h1>
            <p 
            
            className={g.IntroP}
            >Fullstack developer and programmer with predominant interest on javascript, python and machine learning <Link href="/about" className={g.l1}  data-theme={resolvedTheme === 'light' ? 'light' : 'dark'}>{'read more ->'}</Link></p>
           </div>
           
           <div
            className={g.ImageContainer}>
           <Image src={ImageUrl}
           alt={'Hari Raghav, Full Stack Web Developer and creator of Hariraghavtech.com'}
           width={500}
           height={500}
           style={{
            width:"100%",
            height:"100%",
            margin:"auto",
            //position:"relative",
            
            //border:"1px solid red",
            boxShadow:" 1px 8px 8px -4px #ff3a33",
            boxShadow:isHovering ? "0px 0px 100px -20px rgba(255,0,0,0.5)" : 'none',
           }}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
           className={g.ProfileImage}
           ></Image>
           <div style={{display: isHovering ? 'block' : 'none',}}className={g.chatDiv}>Hi World !</div>
           </div>
        </div>
        </div>
    )
}