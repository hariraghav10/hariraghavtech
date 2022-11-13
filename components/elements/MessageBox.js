import g from '../../styles/global.module.css'
import Image from 'next/image'
export default function MessageBox(p) {
    const ImageURL='https://res.cloudinary.com/hariraghavtech/image/upload/v1668259053/hariraghavtech/V1/profile-image.png'
  
    return (
    <div
    className={g.MessageBoxDiv}
    >
    <Image src={ImageURL} width={5000} height={5000} className={g.MessageBoxImage}></Image>
    <div className={g.MessageConentBox}>
    <h3 className={g.MessageTitle}>{p.title}</h3>
    <p className={g.MessageContent}>{p.children}</p>
    </div>
    </div>
    )}