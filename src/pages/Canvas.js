import {useState} from 'react'
import Grid from '../components/Grid'
import GlobeWindow from '../components/GlobeWindow'
import LinkLayer from '../components/LinkLayer'
import Sphere from '../components/Sphere'
import Projects from '../components/Projects'

const Canvas=({styles,styleIndex,setStyleIndex})=>{

    const [class_,setClass]=useState('grid')

    return(
        <div id='canvas'>
            {class_==='grid' && <Grid class_={class_}/>}
            <GlobeWindow/>
            <LinkLayer
                class_={class_}
                setClass={setClass}
            />
            {(class_!='grid' && class_!='purple') && <Sphere class_={class_}/>}
            {class_==='purple' && <Projects/>}
        </div>
    )
}

export default Canvas