import styled,{keyframes} from 'styled-components'
 
const Grid=({grid})=>{

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
    for(let i=0;i<1000;i++){
        column++
        if(column>100){
            row++
            column=1    
        }
        let prct=100-column
        let px=column*7
        spin=keyframes`
            0%{transform:translateX(0%);}
            ${prct}%{transform:translateX(${700-px}px);}
            ${prct+0.1}%{transform:translateX(${-(px)}px);}
            100%{transform:translateX(0px);}
            `
        if(Math.random()<0.01){
            const Unit=styled.div`
                animation: ${flipOnY} 10s linear infinite;
                animation-delay:${Math.random()*200}s;
                grid-row:${row};
                grid-column:${column};
            `
            units.push(<Unit className='unit' key={i}>{Math.random()<0.75?0:1}</Unit>)
        }
        else{
            const unit=(<div className='unit' key={i} style={{ 
                gridRow:row,
                gridColumn:column,
            }}>{Math.random()<0.75?0:1}</div>)
            //units.push(unit)

            const Unit=styled.div`
                animation: ${spin} 10s linear infinite;
                grid-row:${row};
                grid-column:${column};
            `
            units.push(<Unit className='unit' key={i}>{Math.random()<0.75?0:1}</Unit>)
        }
    }

    return(
        <div> 
            <div id='grid'>
                {units}
            </div>
        </div>
    )

}

export default Grid