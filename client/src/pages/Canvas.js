import Grid from '../components/Grid'
import GlobeWindow from '../components/GlobeWindow'
import LinkLayer from '../components/LinkLayer'

const Canvas=()=>{

    return(
        <div id='canvas'>
            <Grid/>
            <GlobeWindow />
            <LinkLayer />
        </div>
    )
}

export default Canvas