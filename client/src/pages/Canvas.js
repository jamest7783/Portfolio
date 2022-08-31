import Grid from '../components/Grid'
import GlobeWindow from '../components/GlobeWindow'
import LinkLayer from '../components/LinkLayer'

const Canvas=({styles,styleIndex,setStyleIndex})=>{
    return(
        <div id='canvas'>
            <Grid styleIndex={styleIndex}/>
            <GlobeWindow/>
            <LinkLayer
                styles={styles}
                styleIndex={styleIndex} 
                setStyleIndex={setStyleIndex}
            />
        </div>
    )
}

export default Canvas