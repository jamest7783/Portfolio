import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'

const App=()=>{

  const renderGrid=()=>{
    let units=[]
    let row=1
    let column=0
    let flip=''
    let selector=0
    for(let i=0;i<10000;i++){
        selector=Math.floor(Math.random()*200)
        console.log(selector)
        if(selector===1){flip='flip1'}
        else if(selector===2){flip='flip2'}
        else if(selector===3){flip='flip3'}
        else if(selector===4){flip='flip4'}
        else if(selector===5){flip='flip5'}
        else if(selector===6){flip='flip6'}
        else if(selector===7){flip='flip7'}
        else if(selector===8){flip='flip8'}
        else if(selector===9){flip='flip9'}
        else if(selector===10){flip='flip10'}
        else{flip='no-flip'}
        column++
        if(column>100){
            row++
            column=1    
        }
        units.push((<div className='unit' id={flip} key={i} style={{ 
            gridRow:row,
            gridColumn:column
        }}>{Math.random()<0.75?0:1}</div>))
    }
    return units
  }
  
  return (
    <div id="App">
        <Routes>
          <Route path='/' element={ <Home grid={renderGrid()} />}/>
        </Routes>
    </div>
  );
}

export default App
