import Image from 'next/image' 
import g from '../../styles/global.module.css'
export default function SocialLikns(p) {
    return (
    <div 
    
    >
    <a 
    style={{
        margin:"0",
        //border:"1px solid green",
        width:"40px",
        height:"40px", 
        borderRadius:"50%",
        //border:"1px solid rgb(255,0,0,0.5)",
        //boxShadow:"0px 0px 5px 2px rgb(255,0,0,0.3)",
        backgroundColor:"#bdbdbd",
        //padding:"0.5rem",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        }}
    href={'https://'+p.link} className={g.sociallinkicon} target="_blank" rel="noopener noreferrer">
    <Image
    style={{
    margin:"0px",
    width:p.w,
    height:p.h,
    //border:"1px solid black",
    }}
    src={p.children}></Image>
    
    </a>
    </div>
        )}