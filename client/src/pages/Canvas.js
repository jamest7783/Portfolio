import Grid from "../components/Grid"
import GlobeWindow from "../components/GlobeWindow"
import StoryBoard from "../components/StoryBoard"

const Canvas=()=>{

    return(
        <div id='canvas'>
            <Grid/>
            {/* <StoryBoard /> */}
            <GlobeWindow />
        </div>
    )
}

export default Canvas