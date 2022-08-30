import {useNavigate} from "react-router-dom"

const LinkLayer=()=>{

    const link=(path)=>{window.open(path,'_blank')}
    
    return(
        <div id='link-layer'>
            <div className='link-level'>
                <button onClick={(e)=>{link('https://google.com')}}>
                    <div className='icon' id='mail-icon'></div>
                    contact
                </button>
                <button onClick={(e)=>{link('https://docs.google.com/document/d/1jYzRgLNj8IO4ZzwQ2WoLnseSsjhxjxDhzHmBwpee2Mc/edit?usp=sharing')}}>
                    resume
                    <div className='icon' id='resume-icon'></div>
                </button>
            </div>
            <div className='link-level'>
                <button onClick={(e)=>{link('https://github.com/jamest7783')}}>
                    <div className='icon' id='github-icon'></div>
                    gitHub
                </button>
                <button onClick={(e)=>{link('https://google.com')}}>
                    skills
                    <div className='icon' id='code-icon'></div>
                </button>
            </div>
            <div className='link-level'>
                <button onClick={(e)=>{link('https://www.linkedin.com/in/james-jewitt/')}}>
                    <div className='icon' id='linkedin-icon'></div>
                    linkedin
                </button>
                <button onClick={(e)=>{link('https://google.com')}}>
                    projects
                    <div className='icon' id='hammer-icon'></div>
                </button>
            </div>
            <div id='hidden-view'></div>
        </div>
    )
}

export default LinkLayer

 