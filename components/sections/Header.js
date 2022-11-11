import Logo from "../elements/Logo"
import Menu from "../elements/Menu"
import ThemeChanger from "../elements/ThemeChanger"
import Link from "next/link"
import g from '../../styles/global.module.css'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Moon from '../../public/Moon Symbol.svg'
import Sun from '../../public/Summer.svg'
const HeaderStyle={
    display:"flex",
    alignItems: "center",
    //justifyContent: "space-around",
    position:"sticky",
    top:"0",
    left:"0",
    borderBottom:"1px solid rgb(0,0,0,0.1)",
    //border:"1px solid red"
    
}
export default function Header() {
    const { resolvedTheme } = useTheme()
    return (
    <div style={HeaderStyle} className={g.header}>
        <Logo></Logo>
        <div style={{
            display:'flex',
        }}>
        <Menu></Menu>
        <ThemeChanger></ThemeChanger>
       {/* <Image src={resolvedTheme === 'light' ? Moon : Sun} className={g.ThemeImage}></Image>*/}
       </div>
    </div>
        )}
