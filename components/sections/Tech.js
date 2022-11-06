import Chip from '../elements/Chip'
import Heading from '../elements/Heading'
import g from '../../styles/global.module.css'
export default function Tech() {
    return (
    <div  style={{
        //border:"1px solid red",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        }}
        className={g.TechCover}
        >

        
        
        <Heading >Tech Stacks I'm Learning<br></br>and Working</Heading>
        <div className={g.ChipsCover}>
        <div   className={g.chipDiv} >
        <Chip anim={g.animback1}>React Js</Chip>
        <Chip anim={g.animback2}>Next Js</Chip>
        <Chip anim={g.animback3}>Javascript</Chip>
        </div>
        <div  className={g.chipDiv}>
        <Chip anim={g.animback4}>Express JS</Chip>
        <Chip anim={g.animback5}>Node JS</Chip>
        <Chip anim={g.animback6}>Mongo DB</Chip>
        </div>
        </div>
        <p style={{border:"0px solid green",margin:"4rem 0 0 0",color:"#616161",}} className={g.TechP}>Firebase, Tailwind, UI, ML, Python, ..</p>

    </div>
        )}