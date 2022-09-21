import ReactPlayer from 'react-player/lazy'
import {useState} from 'react'
import quickChartVideo from '../assets/quickChart.mov'
import alienVideo from '../assets/alienInvasion.mov'
import kohiVideo from '../assets/kohi.mov'

const Projects=({setViewProjects})=>{

    const [projectIndex,setProjectIndex]=useState(0)
    const projects=[
        {title:'QuickChart',movie:quickChartVideo,stack:['nodejs','react','express','mongo'],description:'Simply put, quickCharts is a fullstack application for logging and visualizing data using the chart.js library. Users are able to choose how they would like their data to be display, and with what chart type. Afterwards, users may choose to post their chart, view their chart independently, or return to home. If users would simply like to view past data that previous users had made, they can navigate to and search within all prior user-generated projects.'},
        {title:'Dividend',movie:'',stack:['nodejs','react','express','mongo','sql','jwt'],description:'Dividend is a position trading web application that allows users to build and manage portfolios, with the ability to place orders with real-time market data. Users can also create topic discussions with other investors and leave insights, or replies, within those threads. Additionally, users can stay up to date on market news, and make more informed trading decisions using an abundance of technical indicators and chart visualizations.'},
        {title:'AlienInvasion',movie:alienVideo,stack:['nodejs','css','html'],description:'My goal is here to to create a simple, yet functionally sound game with minimal styling. I will know I have achieved this expectation when my JS, HTML and CSS files have all been refined to the point of having no repeat code, all functions are neat, impactful and do not perfom any unnecessary actions, and I have condensed all superfluous actions without hindering the readability of my code.'},
        {title:'CoffeeLink',movie:kohiVideo,stack:['nodejs','react','express','mongo'],description:'Initial functionality will enable roasters and clients to register and log into the app. Clients will be able to edit their account info, and save products and roasters to a list. Roasters will be able to add, edit and delete products that they offer.'}
    ]

    return(
        <div id='projects' >

            <button id='projects-go-left'
                onClick={(e)=>{projectIndex!=0?setProjectIndex((projectIndex-1)):setProjectIndex(projects.length-1)}}>   
            </button>
            <button id='projects-go-right'
                onClick={(e)=>{projectIndex!=projects.length-1?setProjectIndex((projectIndex+1)):setProjectIndex(0)}}>     
            </button>
            {/* <button id='projects-go-up'></button>
            <button id='projects-go-down'></button> */}
            <button id='exit-projects' onClick={(e)=>{setViewProjects(false)}}>
                Click to Exit
            </button>

            <div className='project-view' id={projects[projectIndex].title}>
                <div id='title'> 
                    {<div>{projects[projectIndex].title}</div>}
                </div>
                <div id='project-container'>
                    <div id='screen'>
                        {projectIndex!=1 && <video width='520' height='340' autoPlay src={projects[projectIndex].movie} loop></video>}
                        {projectIndex===1 && <div id='dividend-img'></div>}
                    </div>
                    <div id='stack'>                      
                        {projects[projectIndex].stack.map((tool,index)=>(
                            <div className='icon' id={projects[projectIndex].stack[index]}></div>
                        ))}
                    </div>
                </div>
                <div id='describe'>
                    <div id='description'>{projects[projectIndex].description}</div>
                </div>
            </div>
        </div>
    )
}
export default Projects