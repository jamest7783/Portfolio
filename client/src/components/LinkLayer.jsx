import { useState } from "react"

const LinkLayer=({linkLayerColor,buttonColor})=>{

    const [skills,revealSkills]=useState(false)
    const [contact,revealContact]=useState(false)
    const link=(path)=>{window.open(path,'_blank')}

    return(
        <div id='link-layer' style={{background:linkLayerColor}}>


                <button className='moon' id='_0' style={{ background:buttonColor }}onClick={(e)=>{
                        if(!contact){
                            revealContact(true)
                            revealSkills(false)
                        }else{
                            revealContact(false)
                        }
                    }}>
                    <div className='icon' id='mail-icon'></div>
                    contact
                </button>


                <button className='moon' id='_1' onClick={(e)=>{link('https://docs.google.com/document/d/1jYzRgLNj8IO4ZzwQ2WoLnseSsjhxjxDhzHmBwpee2Mc/edit?usp=sharing')}}>
                    <div className='icon' id='resume-icon'></div>
                    resume
                </button>


                <button className='moon' id='_2' onClick={(e)=>{link('https://github.com/jamest7783')}}>
                    <div className='icon' id='github-icon'></div>
                    github
                </button>


                <button className='moon' id='_3' onClick={(e)=>{
                        if(!skills){
                            revealSkills(true)
                            revealContact(false)
                        }else{
                            revealSkills(false)
                        }
                    }}>
                    <div className='icon' id='code-icon'></div>
                    skills
                </button>


                <button className='moon' id='_4' onClick={(e)=>{link('https://www.linkedin.com/in/james-jewitt/')}}>
                    <div className='icon' id='linkedin-icon'></div>
                    linkedin
                </button>


                <button className='moon' id='_5' onClick={(e)=>{link('https://google.com')}}>
                <div className='icon' id='hammer-icon'></div>
                    projects
                </button>
 
            {(skills||contact) && 
                <div id='hidden-view'>
                    {skills && 
                        <div id='skills-list'>
                            <ul>
                                Languages
                                <li>Pythons</li>
                            </ul>
                            Python 
                            JavaScript
                            HTML
                            CSS 
                            React
                            Vue
                            MongoDB
                            SQL 
                            Django
                        </div>}
                    {contact && 
                        <div id='contact'>
                            contact me at
                            jamestjewitt@gmail.com
                        </div>}
                </div>
            }
        </div>
    )
}

export default LinkLayer

 