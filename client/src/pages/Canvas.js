import Grid from '../components/Grid'
import GlobeWindow from '../components/GlobeWindow'
import LinkLayer from '../components/LinkLayer'

const Canvas=({
        backgroundColor,
        outlineColor,
        buttonTextColor,
        buttonColor,
        iconColor,
        linkLayerColor,
        globeTextColor,
        gridColor
    })=>{

    return(
        <div id='canvas' style={{backgroundColor:`${backgroundColor}`}}>
            <Grid 
                gridColor={gridColor} globeTextColor={globeTextColor}
            />
            <GlobeWindow />
            <LinkLayer 
                linkLayerColor={linkLayerColor}
                buttonColor={buttonColor}
            />
        </div>
    )
}

export default Canvas