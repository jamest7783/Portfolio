import {styles} from '../styles'

const Sphere=({styleIndex})=>{

    return(
        <div class="world">
            <div class="cube">
                <div 
                class="circle zero"
                style={{borderColor:styles[styleIndex].sphere_border_color}}></div>
                    <div 
                        class="circle one"
                        style={{borderColor:styles[styleIndex].sphere_border_color}}
                    ></div>
                    <div 
                        class="circle two"
                        style={{borderColor:styles[styleIndex].sphere_border_color}}
                    ></div>
                    <div 
                        class="circle three"
                        style={{borderColor:styles[styleIndex].sphere_border_color}}
                    ></div>
                    <div 
                        class="circle four"
                        style={{borderColor:styles[styleIndex].sphere_border_color}}
                    ></div>
                    <div 
                        class="circle five"
                        style={{borderColor:styles[styleIndex].sphere_border_color}}
                    ></div>
                    <div 
                        class="circle six"
                        style={{borderColor:styles[styleIndex].sphere_border_color}}
                    ></div>
            </div>
        </div>
    )
}
export default Sphere