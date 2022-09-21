const Sphere=({class_})=>{

    return(
        <div class="world">
            <div class="cube">
                <div class="circle zero" 
                    style={{borderColor:`${class_}`}}>   
                </div>
                <div class="circle one"
                    style={{borderColor:`${class_}`}}>
                 </div>
                <div class="circle two"
                    style={{borderColor:`${class_}`}}>
                </div>
                <div class="circle three"
                    style={{borderColor:`${class_}`}}>
                </div>
                <div class="circle four"
                    style={{borderColor:`${class_}`}}>
                </div>
                <div class="circle five"
                    style={{borderColor:`${class_}`}}>
                </div>
                <div class="circle six"
                    style={{borderColor:`${class_}`}}>
                </div>
            </div>
        </div>
    )
}
export default Sphere