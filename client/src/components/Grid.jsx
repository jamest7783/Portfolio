import styled,{keyframes} from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
 
const Grid=()=>{

    let units=[]
    let row=1
    let column=0
    const flipOnY=keyframes`
        0% {transform: rotateY(0deg)}
        35% {transform: rotateY(0deg)}
        50% {transform: rotateY(-180deg)}
        85% {transform: rotateY(-180deg)}
        100% {transform: rotateY(0deg)}
    `
    let spin
    for(let i=0;i<1600;i++){
        column++
        if(column>40){
            row++
            column=1    
        }
        let prct=((40-column)/40)*100
        let px=column*9
        spin=keyframes`
            0%{transform:translateX(0%);}
            ${prct}%{transform:translateX(${360-px}px);}
            ${prct+0.01}%{transform:translateX(${-(px)}px);}
            100%{transform:translateX(0px);}
            `
        let txt = Math.random()>0.03 ? Math.random()<0.75?0:1 : ''
        const Unit=styled.div`
            animation: ${spin} 5s linear infinite;
            grid-row:${row};
            grid-column:${column};
        `
        units.push(<Unit className='unit' key={i}>{txt}</Unit>)
    }
    return(
        <div> 
            <div id='grid'>
                { units }
            </div> 
        </div>
    )
}
export default Grid