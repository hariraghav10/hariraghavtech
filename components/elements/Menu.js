import Link from 'next/link'
import g from '../../styles/global.module.css'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Moon from '../../public/Moon Symbol.svg'
import Sun from '../../public/Summer.svg'

export default function Menu() {
    const { resolvedTheme } = useTheme()

    return (

        <div
        style={{
            
            //border:"1px solid black",

          }}
          className={g.navdiv} ><nav>
            <ul className={g.list} data-theme={resolvedTheme === 'light' ? 'light' : 'dark'}>
                <li className={`${g.buttonstyle}  ${g.navlink} ${g.l}`} data-theme={resolvedTheme === 'light' ? 'light' : 'dark'}><Link href="/" className={`${g.Focus} ${g.LinkA}`}     >HOME</Link></li>
                <li className={`${g.buttonstyle}  ${g.navlink} ${g.l}`}  data-theme={resolvedTheme === 'light' ? 'light' : 'dark'}><Link href="/#tech" scroll={false} className={g.LinkA}>TECH</Link></li>
                <li className={`${g.buttonstyle}  ${g.navlink} ${g.l}`}  data-theme={resolvedTheme === 'light' ? 'light' : 'dark'}><Link href="/about" className={g.LinkA}>ABOUT</Link></li>
               
              
            </ul></nav>
        </div>

    )}