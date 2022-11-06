import g from '../../styles/global.module.css'
export default function Heading(p) {
    var classes;
    if(p.color=='grey'){
    classes=`${g.Heading} ${g.colorGrey}`;
    
    }
    else{
        classes=`${g.Heading}`;
    }
    return (
    <h1 
    
    style={{
   
    }}
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