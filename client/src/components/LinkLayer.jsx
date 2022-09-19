import { useState } from "react"
import {styles} from '../styles'


const LinkLayer=({styleIndex,setStyleIndex})=>{

    const [showSkills,setShowSkills]=useState(false)
    const [showContact,setShowContact]=useState(false)
    const link=(path)=>{window.open(path,'_blank')}
    const styleize=(id)=>{
        if(id===4){setShowSkills(true)}
        if(id===1){setShowContact(true)}
        setStyleIndex(id)
    }
    

    return(
        <div id='link-layer' 
            style={{outline:styles[styleIndex].outline_color}}
            >
            <button className='moon' id='_0'  
                style={{color:styles[styleIndex].button_text_color}}
                onMouseOver={(e)=>{styleize(1)}}
                onMouseLeave={(e)=>{setShowContact(false)}}
                onClick={(e)=>{link('https://www.linkedin.com/in/james-jewitt/')}}>
                <div className='icon' id='mail-icon'></div>
                {showSkills && 'React Vue Express' || 'Contact' }
            </button>
            { showContact && <button className='moon' id='_5' style={{color:'red'}}>jamestjewitt at gmail.com</button>} 
            <button className='moon' id='_1' 
                style={{color:styles[styleIndex].button_text_color}}
                onMouseOver={(e)=>{styleize(2)}}
                onClick={(e)=>{link('https://docs.google.com/document/d/1jn55T48Sldtizv9ooG1dBnpojXuOQ5ZSqSI1ruLhKV0/edit?usp=sharing')}}>
                <div className='icon' id='resume-icon'></div>
                {showSkills && 'SQL MongoDb' || 'Resume' }
            </button>
            <button className='moon' id='_2' 
                style={{color:styles[styleIndex].button_text_color}}
                onMouseOver={(e)=>{styleize(3)}}
                onClick={(e)=>{link('https://github.com/jamest7783')}}>
                <div className='icon' id='github-icon'></div>
                {showSkills && 'JavaScript Python' || 'GitHub' }
            </button>
            <button 
                className='moon' id='_3' 
                style={{color:styles[styleIndex].button_text_color}}
                onMouseOver={(e)=>{styleize(4)}}
                onMouseLeave={(e)=>{setShowSkills(false)}}>
                <div className='icon' id='code-icon'></div>
                {showContact && '' || 'Skills' }
            </button>
             <button className='moon' id='_4' 
                style={{color:styles[styleIndex].button_text_color}}
                onMouseOver={(e)=>{styleize(5)}}
                onClick={(e)=>{link('https://www.linkedin.com/in/james-jewitt/')}}>
                <div className='icon' id='linkedin-icon'></div>
                {showContact && '' || showSkills && 'HtML CSS' || 'LinkedIn' }
            </button>
        </div>
    )
}

export default LinkLayer
