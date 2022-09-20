import { useState } from "react"
import {styles} from '../styles'


const LinkLayer=({styleIndex,setStyleIndex,class_,setClass})=>{

    const [showContact,setShowContact]=useState(false)
    const [showSkills,setShowSkills]=useState(false)
    const [showClickLinkedIn,setShowClickLinkedIn]=useState(false)
    const [showClickResume,setShowClickResume]=useState(false)
    const [showClickGitHub,setShowClickGitHub]=useState(false)
    const [revealProjects,setRevealProjects]=useState(false)
    const link=(path)=>{window.open(path,'_blank')}
    
    return(
        <div id='link-layer' 
            style={{outline:`5px double ${class_}`}}>
            <button className={class_} id='_0'  
                onMouseOver={(e)=>{
                    setClass('red')
                    setShowContact(true)
                }}
                onMouseLeave={(e)=>{setShowContact(false)}}
                onClick={(e)=>{link('https://www.linkedin.com/in/james-jewitt/')}}>
                <div className='icon' id='mail-icon'></div>
                {showSkills && 'React Vue Express' || 'Contact' }
            </button>
            {showContact && <button id='_5' style={{color:'blue'}}>jamestjewitt@gmail.com</button>} 
            <button className={class_} id='_1' 
                onMouseOver={(e)=>{
                    setClass('black')
                    setShowClickResume(true)
                }}
                onMouseLeave={(e)=>{setShowClickResume(false)}}
                onClick={(e)=>{link('https://docs.google.com/document/d/1jn55T48Sldtizv9ooG1dBnpojXuOQ5ZSqSI1ruLhKV0/edit?usp=sharing')}}>
                {showClickResume && <div className='click-to-nav' id='hover-resume-top'>
                    click to
                </div>}
                {showSkills && 'SQL MongoDb' || 'Resume' }
                {showClickResume && <div className='click-to-nav' id='hover-resume-bottom'>
                    navigate
                </div>}
            </button>
            <button className={class_} id='_2' 
                onMouseOver={(e)=>{
                    setClass('orange')
                    setShowClickGitHub(true)
                }}
                onMouseLeave={(e)=>{setShowClickGitHub(false)}}
                onClick={(e)=>{link('https://github.com/jamest7783')}}>
                <div className='icon' id='github-icon'></div>
                {showClickGitHub && <div className='click-to-nav' id='hover-github-top'>
                    click to
                </div>}
                {showSkills && 'JavaScript Python' || 'GitHub' }
                {showClickGitHub && <div className='click-to-nav' id='hover-github-bottom'>
                    navigate
                </div>}
            </button>
            <button className={class_} id='_3' 
                onMouseOver={(e)=>{
                    setClass('green')
                    setShowSkills(true)
                }}
                onMouseLeave={(e)=>{setShowSkills(false)}}>
                <div className='icon' id='code-icon'></div>
                {showContact && '' || 'Skills'}
            </button>
            <button className={class_} id='_4' 
                onMouseOver={(e)=>{
                    setClass('blue')
                    setShowClickLinkedIn(true)
                }}
                onMouseLeave={(e)=>{setShowClickLinkedIn(false)}}
                onClick={(e)=>{link('https://www.linkedin.com/in/james-jewitt/')}}>
                {showClickLinkedIn && <div className='click-to-nav' id='hover-linkedIn'>
                    click to navigate
                </div>}
                {showSkills && 'HTML CSS' || 'LinkedIn' }
            </button>
            <button className={class_} id='_6'
                onMouseOver={(e)=>{
                    setClass('purple')
                    setRevealProjects(true)
                }}
                onMouseLeave={(e)=>{setRevealProjects(false)}}>
                {revealProjects && <div className='click-to-nav' id='hover-projects-top'>
                    click to
                </div>}
                Projects
                {revealProjects && <div className='click-to-nav' id='hover-projects-bottom'>
                    view
                </div>}
            </button>
        </div>
    )
}

export default LinkLayer
