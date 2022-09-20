import { useState } from "react"
import {styles} from '../styles'


const LinkLayer=({styleIndex,setStyleIndex})=>{

    const [class_,setClass]=useState('moo')
    const [showContact,setShowContact]=useState(false)
    const link=(path)=>{window.open(path,'_blank')}
    
    return(
        <div id='link-layer' 
            style={{outline:`5px double ${class_}`}}>
            <button className={class_} id='_0'  
                onMouseOver={(e)=>{setClass('red')}}
                onMouseLeave={(e)=>{setShowContact(false)}}
                onClick={(e)=>{link('https://www.linkedin.com/in/james-jewitt/')}}>
                <div className='icon' id='mail-icon'></div>
                {class_==='green' && 'React Vue Express' || 'Contact' }
            </button>
            {class_==='red' && <button className='moon' id='_5' style={{color:'red'}}>jamestjewitt at gmail.com</button>} 
            <button className={class_} id='_1' 
                onMouseOver={(e)=>{setClass('black')}}
                onClick={(e)=>{link('https://docs.google.com/document/d/1jn55T48Sldtizv9ooG1dBnpojXuOQ5ZSqSI1ruLhKV0/edit?usp=sharing')}}>
                <div className='icon' id='resume-icon'></div>
                {class_==='green' && 'SQL MongoDb' || 'Resume' }
            </button>
            <button className={class_} id='_2' 
                onMouseOver={(e)=>{setClass('blue')}}
                onClick={(e)=>{link('https://github.com/jamest7783')}}>
                <div className='icon' id='github-icon'></div>
                {class_==='green' && 'JavaScript Python' || 'GitHub' }
            </button>
            <button className={class_} id='_3' 
                onMouseOver={(e)=>{setClass('green')}}
                onMouseLeave={(e)=>{setClass('black')}}>
                <div className='icon' id='code-icon'></div>
                {showContact && '' || 'Skills'}
            </button>
             <button className={class_} id='_4' 
                onMouseOver={(e)=>{setClass('blue')}}
                onClick={(e)=>{link('https://www.linkedin.com/in/james-jewitt/')}}>
                <div className='icon' id='linkedin-icon'></div>
                {showContact && '' || class_==='green' && 'HtML CSS' || 'LinkedIn' }
            </button>
        </div>
    )
}

export default LinkLayer
