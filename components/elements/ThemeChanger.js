import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Moon from '../../public/Moon Symbol.svg'
import Sun from '../../public/Sun.svg'
import g from '../../styles/global.module.css'

export default function ThemeChanger(){
  const [mounted, setMounted] = useState(false)
 const { theme, setTheme } = useTheme()
 const { resolvedTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
    <div >
      <Image tabIndex={0} src={Sun} className={g.ThemeImage} ></Image>
    </div>)
  }
  
  return (
    <div >
    <Image tabIndex={0} src={resolvedTheme === 'light' ? Moon : Sun} className={g.ThemeImage} onClick={e => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}></Image>
    </div>
  )
}