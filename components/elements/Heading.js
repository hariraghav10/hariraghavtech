import g from '../../styles/global.module.css'
export default function Heading(p) {
    
    return (
    <h1 
    
    className={g.Heading}
    >
        
    {p.children}
    <span
     style={{
    color:"#CA0000",
    fontWeight:"900",
    fontSize:"2rem"
     }} className={g.animtext1}> .</span>
    </h1>
        )}