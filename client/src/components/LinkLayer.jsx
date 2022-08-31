import { useState } from "react"

const LinkLayer=()=>{

    const link=(path)=>{window.open(path,'_blank')}

    return(
        <div id='link-layer'>
            <button className='moon' id='_0'>
                <div className='icon' id='mail-icon'></div>
                contact
            </button>
            <button className='moon' id='_1'>
                <div className='icon' id='resume-icon'></div>
                resume
            </button>
            <button className='moon' id='_2'>
                <div className='icon' id='github-icon'></div>
                github
            </button>
            <button className='moon' id='_3'>
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
        </div>
    )
}

export default LinkLayer

// style={{background:buttonColor,color:buttonTextColor}}
// onClick={(e)=>{setStyle(0)}}