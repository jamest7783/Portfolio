import {useState} from 'react'
import Grid from '../components/Grid'
import GlobeWindow from '../components/GlobeWindow'
import LinkLayer from '../components/LinkLayer'
import Sphere from '../components/Sphere'
import Projects from '../components/Projects'

const Canvas=({styles,styleIndex,setStyleIndex})=>{

    const [class_,setClass]=useState('grid')
    const [viewProjects,setViewProjects]=useState(false)

    return(
        <div id='canvas'>
            <Grid/>
            <GlobeWindow/>
            {!viewProjects &&
            <LinkLayer
                class_={class_}
                setClass={setClass}
                viewProjects={viewProjects}
                setViewProjects={setViewProjects}
            />
            }
            {(class_!='grid' && !viewProjects) && <Sphere class_={class_}/>}
            {(class_==='purple' && viewProjects) && <Projects setViewProjects={setViewProjects}/>}
        </div>
    )
}

export default Canvas