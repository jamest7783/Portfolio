import {useState} from 'react'
import Grid from '../components/Grid'
import GlobeWindow from '../components/GlobeWindow'
import LinkLayer from '../components/LinkLayer'
import Sphere from '../components/Sphere'
import Projects from '../components/Projects'
import Resume from '../components/Resume'

const Canvas=({styles,styleIndex,setStyleIndex})=>{

    const [class_,setClass]=useState('grid')
    const [viewProjects,setViewProjects]=useState(false)
    const [resume,setResume]=useState(false)

    return(
        <div id='canvas'>
            <Grid/>
            <GlobeWindow/>
            {!viewProjects &&
            <LinkLayer
                setResume={setResume}
                resume={resume}
                class_={class_}
                setClass={setClass}
                viewProjects={viewProjects}
                setViewProjects={setViewProjects}
            />
            }
            {(class_!='grid' && !viewProjects && class_!='red') && <Sphere class_={class_}/>}
            {(class_==='purple' && viewProjects) && <Projects setViewProjects={setViewProjects}/>}
            {resume && <Resume setResume={setResume}/>}
        </div>
    )
}

export default Canvas