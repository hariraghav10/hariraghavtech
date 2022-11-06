import SocialLinks from '../elements/SocialLinks'
import UpdationMessage from '../elements/UpdationMessage'
import I1 from '../../public/github-svgrepo-com.svg'
import I2 from '../../public/linkedin-svgrepo-com.svg'
import g from '../../styles/global.module.css'
export default function Footer() {
    return (
    <div
    style={{
        margin:"8rem 0 0 0",
        //border:"1px solid red",
        //borderTop:"1px solid rgb(0,0,0,0.1)",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        padding:"5rem 0 0rem 0"
        //alignContent:"center"

        }}
    >
    
    
    <div 
    style={{
    marginTop:"10px",
    display:"flex",
    width:"100px",
    justifyContent:"space-between",
    //border:"1px solid red"
    }}>
    <SocialLinks w="20px" h="20px" link="www.github.com">{I1}</SocialLinks>
    <SocialLinks w="20px" h="20px" link="www.linkedin.com">{I2}</SocialLinks>
    </div>

    <a href="mailto:me@hariraghavtech.com"><h3  style={{
    marginTop:"30px",border:"0px solid red"}} className={`${g.l} ${g.email}`}>me@hariraghavtech.com</h3></a>
    
    <p style={{
    marginTop:"50px",}} className={g.CreditP}>made with {'{'}<span style={{color:"red"}}>love</span>{'}'} and {'{'}<span style={{color:"red"}}>code</span>{'}'} by <span style={{color:"red",fontStyle:"italic"}}>Hari Raghav</span></p>   

    <p style={{fontSize:"14px",color:"rgb(0,0,0,0.3)",fontWeight:"600", margin:"1rem 0 5rem 0"}} >© 2022 hariraghavtech.com</p>

    <UpdationMessage></UpdationMessage>
    
    </div>
        )}