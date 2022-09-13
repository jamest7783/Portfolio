import Grid from '../components/Grid'
import GlobeWindow from '../components/GlobeWindow'
import LinkLayer from '../components/LinkLayer'
import Planet from '../components/Planet'

const Canvas=({styles,styleIndex,setStyleIndex})=>{
    return(
        <div id='canvas'>
            <Grid styleIndex={styleIndex}/>
            <GlobeWindow/>
            <LinkLayer
                styleIndex={styleIndex} 
                setStyleIndex={setStyleIndex}
            />
            {/* <Planet styleIndex={styleIndex}/> */}
        </div>
    )
}

export default Canvas