import Grid from '../components/Grid'
import GlobeWindow from '../components/GlobeWindow'
import LinkLayer from '../components/LinkLayer'
import Sphere from '../components/Sphere'
import Projects from '../components/Projects'

const Canvas=({styles,styleIndex,setStyleIndex})=>{
    return(
        <div id='canvas'>
            <Grid styleIndex={styleIndex}/>
            <GlobeWindow/>
            <LinkLayer
                styleIndex={styleIndex} 
                setStyleIndex={setStyleIndex}
            />
            {(styleIndex!=0)  && <Sphere styleIndex={styleIndex}/>}
            {/* {styleIndex==2 && <Projects/>} */}
        </div>
    )
}

export default Canvas