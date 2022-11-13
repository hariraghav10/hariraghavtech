
import { useTheme } from 'next-themes'
import { useEffect,useState } from 'react'
export default function ReturnTheme() {

  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    console.log('Not Mounted')
    return ('light')
  }
  else{
    console.log('Mounted')
    return (resolvedTheme)
  }
}
      