import g from '../../styles/global.module.css'
export default function Chip(p) {
    return (
    <div style={{
   
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:"20px",backgroundColor:"#F0F0F0",color:"#CA0000",color:"white",
    boxShadow:" 1px 8px 8px -4px #ff3a33",
    }}
    className={`${g.animback} ${p.anim} ${g.chip}`}
    >
        <p className={`${g.animtext1} `}>{p.children}</p>
    </div>
        )}