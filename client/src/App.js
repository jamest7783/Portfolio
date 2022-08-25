import './App.css'
import {Routes,Route} from 'react-router-dom'
import Canvas from './pages/Canvas'

const App=()=>{

  return (
    <div id="App">
        <Routes>
          <Route path='/' element={ <Canvas  />}/>
        </Routes>
    </div>
  );
}

export default App
