import Link from 'next/link'
import g from '../../styles/global.module.css'

export default function Menu() {
    return (

        <div
        style={{
            
            border:"0px solid black",

          }}
          className={g.navdiv}><nav>
            <ul className={g.list}>
                <li className={`${g.buttonstyle}  ${g.navlink} ${g.l}`}><Link href="/" legacyBehavior><a className={global.links}>HOME</a></Link></li>
                <li className={`${g.buttonstyle}  ${g.navlink} ${g.l}`}><Link href="/#tech" scroll={false}>TECH</Link></li>
                <li className={`${g.buttonstyle}  ${g.navlink} ${g.l}`}><Link href="/about">ABOUT</Link></li>
            </ul></nav>
        </div>

    )}