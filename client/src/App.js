import './App.css'
import {Routes,Route} from 'react-router-dom'
import Canvas from './pages/Canvas'
import {useEffect, useState} from 'react'

const App=()=>{

  const [ backgroundColor, setBackgroundColor ]           = useState('transparent')
  const [ outlineColor, setOutlineColor ]                 = useState('black')
  const [ buttonTextColor, setButtonTextColor ]           = useState('transparent')

  const [ iconColor, setIconColor ]                       = useState('transparent')
  
  const [ buttonColor, setButtonColor ]                   = useState('transparent')
  const [ linkLayerColor, setLinkLayerColor]              = useState('transparent')
  const [ globeTextColor, setGlobeTextColor]              = useState('black')
  const [ gridColor, setGridTextColor]                    = useState('radial-gradient(black,white)')

  return (
  //   let handleHover=(id)=>{
  //     switch(id){
  //         case 0:
  //             setBackgroundColor()
  //             setOutlineColor()
  //             setButtonTextColor()
  //             setButtonColor()
  //             setIconColor()
  //             setGlobeBackgroundColor()
  //             setLinkLayerColor()
  //             setGlobeTextColor()
  //             break;
  //     }
  // }
    <div id="App">
        <Routes>
          <Route path='/' element={ <Canvas
            backgroundColor={backgroundColor} 
            outlineColor={outlineColor}
            buttonTextColor={buttonTextColor}
            buttonColor={buttonColor}
            iconColor={iconColor}
            linkLayerColor={linkLayerColor}
            globeTextColor={globeTextColor}
            gridColor={gridColor}
            />}/>
        </Routes>
    </div>
  );
}

export default App
