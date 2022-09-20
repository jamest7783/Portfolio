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
            <GlobeWindow/>
            <LinkLayer
                styleIndex={styleIndex} 
                setStyleIndex={setStyleIndex}
                class_={class_}
                setClass={setClass}
            />
            {class_!='grid' && <Sphere styleIndex={styleIndex}/>}
            {class_==='grid' && <Grid styleIndex={styleIndex} class_={class_}/>}
            {/* {styleIndex==2 && <Projects/>} */}
        </div>
    )
}

export default Canvas