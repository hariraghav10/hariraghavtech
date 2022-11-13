import Link from 'next/link'
import g from '../../styles/global.module.css'
import { useTheme } from 'next-themes'
import { useEffect,useState } from 'react'
import Image from 'next/image'
import Moon from '../../public/Moon Symbol.svg'
import Sun from '../../public/Summer.svg'
import ReturnTheme from './ReturnTheme'

export default function Menu() {
   {/*
    const { resolvedTheme } = useTheme()
    const [Theme1, setTheme1] = useState('light')
    useEffect(() => {
        //const { resolvedTheme } = useTheme()
        //setTheme1(resolvedTheme)
        setTheme1(resolvedTheme === 'light' ? 'light' : 'dark')
      }, [resolvedTheme])
    */}
    return (

        <div
        style={{
            
            //border:"1px solid black",

          }}
          className={g.navdiv} ><nav>
           { /*<ReturnTheme></ReturnTheme>*/}
           {/* <p>{Theme1}</p>*/}
            <ul className={g.list} >
                <li className={`${g.buttonstyle}  ${g.navlink} ${g.l}`}  ><Link href="/" className={`${g.Focus} ${g.LinkA}`}>HOME</Link></li>
                <li className={`${g.buttonstyle}  ${g.navlink} ${g.l}`}  ><Link href="/#tech" scroll={false} className={g.LinkA}>TECH</Link></li>
                <li className={`${g.buttonstyle}  ${g.navlink} ${g.l}`}  ><Link href="/about" className={g.LinkA}>ABOUT</Link></li>
               
              
            </ul></nav>
        </div>

    )}