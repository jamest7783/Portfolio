import {styles} from '../styles'

const Planet=({styleIndex})=>{

    return(
        <div 
            className="circle"
            style={{background:styles[styleIndex].planet}}
        >

        </div>
    )
}
export default Planet