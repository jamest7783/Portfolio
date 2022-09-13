import { useState } from "react"
import {styles} from '../styles'

const LinkLayer=({styleIndex,setStyleIndex})=>{

    const link=(path)=>{window.open(path,'_blank')}

    const styleize=(id)=>{
        setStyleIndex(id)
    }

    return(
        <div id='link-layer' style={{outline:styles[styleIndex].outline_color}}>
            <button className='moon' id='_0' onMouseOver={(e)=>{styleize(1)}}
                onClick={(e)=>{link('https://www.linkedin.com/in/james-jewitt/')}}>
                <div className='icon' id='mail-icon'></div>
                contact
            </button>
            <button className='moon' id='_1' onMouseOver={(e)=>{styleize(2)}}
                onClick={(e)=>{link('https://docs.google.com/document/d/1jn55T48Sldtizv9ooG1dBnpojXuOQ5ZSqSI1ruLhKV0/edit?usp=sharing')}}>
                <div className='icon' id='resume-icon'></div>
                resume
            </button>
            <button className='moon' id='_2' onMouseOver={(e)=>{styleize(3)}}
                onClick={(e)=>{link('https://github.com/jamest7783')}}>
                <div className='icon' id='github-icon'></div>
                github
            </button>
            <button className='moon' id='_3' onMouseOver={(e)=>{styleize(4)}}>
                <div className='icon' id='code-icon'></div>
                skills
            </button>
             <button className='moon' id='_4' onMouseOver={(e)=>{styleize(5)}}
                onClick={(e)=>{link('https://www.linkedin.com/in/james-jewitt/')}}>
                <div className='icon' id='linkedin-icon'></div>
                linkedin
            </button>
            <button className='moon' id='_5' onMouseOver={(e)=>{styleize(6)}}
                onClick={(e)=>{link('https://github.com/jamest7783')}}>
                <div className='icon' id='hammer-icon'></div>
                projects
            </button>
        </div>
    )
}

export default LinkLayer
