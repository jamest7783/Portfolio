import { useState } from "react"

const LinkLayer=({styles,styleIndex,setStyleIndex})=>{

    const link=(path)=>{window.open(path,'_blank')}
    const styleize=(num)=>{
        console.log('here')
        setStyleIndex(num)
    }
    console.log(styles)
    let outline_color=styles[styleIndex].outline_color
    console.log(outline_color)




    return(
        <div id='link-layer' style={{ outlineColor:outline_color }}>
            <button className='moon' id='_0' onClick={(e)=>{styleize(6)}}>
                <div className='icon' id='mail-icon'></div>
                contact
            </button>
            <button className='moon' id='_1' onClick={(e)=>{styleize(1)}}>
                <div className='icon' id='resume-icon'></div>
                resume
            </button>
            <button className='moon' id='_2' onClick={(e)=>{styleize(2)}}>
                <div className='icon' id='github-icon'></div>
                github
            </button>
            <button className='moon' id='_3' onClick={(e)=>{styleize(3)}}>
                <div className='icon' id='code-icon'></div>
                skills
            </button>
             <button className='moon' id='_4' onClick={(e)=>{
                link('https://www.linkedin.com/in/james-jewitt/')
                styleize(4)
                }}>
                <div className='icon' id='linkedin-icon'></div>
                linkedin
            </button>
            <button className='moon' id='_5' onClick={(e)=>{styleize(5)}}>
                <div className='icon' id='hammer-icon'></div>
                projects
            </button>
        </div>
    )
}

export default LinkLayer

// style={{background:buttonColor,color:buttonTextColor}}
// onClick={(e)=>{setStyle(0)}}