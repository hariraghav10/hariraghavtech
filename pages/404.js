import MessageBox from "../components/elements/MessageBox";
import Heading from '../components/elements/Heading'
import Link from "next/link";
import g from '../styles/global.module.css'

export default function ErrorPage(){
return(
    <div style={{margin:"5rem 0 0 0",}}>
   <Heading>404 | Page Not Found</Heading> 
   <MessageBox
   title='Sorry! the requested page  is not available'
   
   >I suggest you to visit the <Link href='/' className={g.l1}>Home page →</Link></MessageBox>
    </div>
)
}