import './App.css'
import {Routes,Route} from 'react-router-dom'
import Canvas from './pages/Canvas'
import {useState} from 'react'
import {styles} from './styles' 

const App=()=>{

  const [styleIndex,setStyleIndex]=useState(0)

  return(
    <div id="App">
        <Routes>
          <Route path='/' element={ 
            <Canvas 
              styles={styles}
              styleIndex={styleIndex} 
              setStyleIndex={setStyleIndex}
            />}
          />
        </Routes>
    </div>
  )
}

export default App
