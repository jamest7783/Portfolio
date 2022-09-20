import {useState} from 'react'

const Projects=({setViewProjects})=>{

    const [projectIndex,setProjectIndex]=useState(0)
    const projects=[
        {title:'quickChart'},
        {title:'Dividend'},
        {title:'AlienInvasion'}
    ]

    return(
        <div id='projects'>

            <button id='projects-go-left'
                onClick={(e)=>{projectIndex!=0?setProjectIndex((projectIndex-1)):setProjectIndex(projects.length-1)}}>   
            </button>
            <button id='projects-go-right'
                onClick={(e)=>{projectIndex!=projects.length-1?setProjectIndex((projectIndex+1)):setProjectIndex(0)}}>     
            </button>
            <button id='projects-go-up'></button>
            <button id='projects-go-down'></button>
            <button id='exit-projects' onClick={(e)=>{setViewProjects(false)}}>
                Click to Exit
            </button>

            <div className='project-view' id={projects[projectIndex].title}>


                {projects[projectIndex].title!='Dividend' && projects[projectIndex].title}




            </div>
        </div>
    )
}
export default Projects