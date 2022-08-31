import './App.css'
import {Routes,Route} from 'react-router-dom'
import Canvas from './pages/Canvas'
import {useEffect, useState} from 'react'

const App=()=>{

  const [ backgroundColor, setBackgroundColor ]    = useState('transparent')
  const [ outlineColor, setOutlineColor ]          = useState('5px solid black')
  const [ buttonTextColor, setButtonTextColor ]    = useState('black')
  const [ buttonColor, setButtonColor ]            = useState('transparent')
  const [ linkLayerColor, setLinkLayerColor]       = useState('transparent')
  const [ iconColor, setIconColor ]                = useState('transparent')

  const [styleId,setStyleId]=useState(0)


  const style_0={
    background_color:'transparent',
    outline_color:'5px solid black',
    button_text_color:'black',
    button_color:'transparent',
    link_layer_color:'transparent',
    globe_text_color:'black',
    grid_color:'radial-gradient(black,white',
    icon_color:'transparent' 
  }
  const style_1={
    background_color:'anitique white',
    outline_color:'10px solid yellow',
    button_text_color:'blue',
    button_color:'pink',
    link_layer_color:'transparent',
    globe_text_color:'green',
    grid_color:'black',
    icon_color:'blue' 
  }
  const style_2={
    background_color:'anitique white',
    outline_color:'10px solid red',
    button_text_color:'white',
    button_color:'blue',
    link_layer_color:'transparent',
    globe_text_color:'green',
    grid_color:'yellow',
    icon_color:'blue' 
  }
  let styles=[style_0,style_1,style_2]

  let handleStyle=(id,styles)=>{
    const set=[setBackgroundColor,setOutlineColor,setButtonTextColor,setButtonColor,setLinkLayerColor,setIconColor]
    console.log('called style',id)
    for(let i=0; i<Object.keys(styles[id]).length ;i++){
      console.log(i)
      set[i](Object.values(styles[id])[i])
    }
  }
 

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

            handleStyle={handleStyle}
            styles={styles}
            styleId={styleId}
            setStyleId={setStyleId}

            />}/>
        </Routes>
    </div>
  );
}

export default App
