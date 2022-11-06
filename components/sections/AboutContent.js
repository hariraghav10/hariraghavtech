import g from '../../styles/global.module.css'
export default function AboutContent(p) {
    return (
    <div
    style={{
        border:"0px solid red",
       
        
    }}
    className={g.AboutComp}
    >{p.children}
       
    </div>
        )}