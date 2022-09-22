import {useState} from 'react'

const Resume=({setResume})=>{

    const [action,setAction]=useState('hold')
    const download=()=>{
        fetch('./Resume_Jewitt.pdf').then(response=>{
            response.blob().then(blob=>{
                const fileURL=window.URL.createObjectURL(blob)
                let alink=document.createElement('a')
                alink.href=fileURL 
                alink.download='JamesJewitt.pdf'
                alink.click()
            })
        })
    }

    return(
        <div className='resume' id={action}>
            <div id='header-buttons'>
            <button id='download'
            onClick={(e)=>{download()}}>Download</button>
            <button 
                className='header-button'
                id='fullscreen-button'
                onClick={(e)=>{
                    setAction('fullscreen')
                }}
                >+</button>
                <button 
                className='header-button'
                id='minimize-button'
                onClick={(e)=>{
                    if(action==='fullscreen'){setAction('minimize')}
                }}
                >
                - 
                </button>
                <button 
                className='header-button' 
                id='exit-button'
                onClick={(e)=>{
                    setAction('exit')
                }}
                >x</button>
            </div>
            <div id='resume-pdf'>

            </div>
            {/* {action==='hold' && <div id='click-for-fullscreen'>fullscreen</div>} */}
        </div>
    )
}
export default Resume