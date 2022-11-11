import g from '../../styles/global.module.css'
export default function UpdationMessage(p) {
    return (
    <div style={{
    
    //border:"1px solid green",
    width:"100%",
    height:"40px", 
    
    fontWeight:"300",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
    }}
    className={g.UpdateDiv}
    ><p className={g.UpdateMsg}>The site is under a upgradation and this page is a short version of original content</p></div>

    )}