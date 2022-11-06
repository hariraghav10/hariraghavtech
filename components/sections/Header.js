import Logo from "../elements/Logo"
import Menu from "../elements/Menu"
import Link from "next/link"
import g from '../../styles/global.module.css'
const HeaderStyle={
    display:"flex",
    alignItems: "center",
    //justifyContent: "space-around",
    position:"sticky",
    
    backgroundColor:"white",
    borderBottom:"1px solid rgb(0,0,0,0.1)",
    //border:"1px solid red"
    
}
export default function Header() {
    return (
    <div style={HeaderStyle} className={g.header}>
        <Link href="/"><Logo></Logo></Link>
        <Menu></Menu>
        
    </div>
        )}