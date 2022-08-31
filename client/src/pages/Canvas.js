import Grid from '../components/Grid'
import GlobeWindow from '../components/GlobeWindow'
import LinkLayer from '../components/LinkLayer'
import styled from 'styled-components'

const Canvas=({
        backgroundColor,
        outlineColor,
        buttonTextColor,
        buttonColor,
        iconColor,
        linkLayerColor,

        handleStyle,
        styles,
        styleId,
        setStyleId
    })=>{

    return(
        <div id='canvas' style={{
            backgroundColor:`${backgroundColor}`
            }}>
            <Grid 
                styleId={styleId}
                styles={styles}
            />
            <GlobeWindow />
            <LinkLayer 
                linkLayerColor={linkLayerColor}
                buttonColor={buttonColor}
                iconColor={iconColor}
                buttonTextColor={buttonTextColor}
                outlineColor={outlineColor}
                setStyleId={setStyleId}
                handleStyle={handleStyle}
                styles={styles}
                styleId={styleId}
            />
        </div>
    )
}

export default Canvas