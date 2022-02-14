import React, { useState } from 'react';
import sliderData from "./Sliderdata"
import "./Slider.css"
import ReactPlayer from 'react-player'



function Slider() {
    const [current, setcurrent] = useState(0);
const length= sliderData.length;

const prevSlide=()=>{
  setcurrent(current=== 0 ? length-1 : current -1 )
}
const nextSlide=()=>{
     setcurrent(current === length-1 ? 0 : current + 1)
}
console.log("curr",current);

  return <div className='slider'> 

<button  className='right_arrow' onClick={nextSlide}>{">"}</button>
<button className='left_arrow' onClick={prevSlide}>{"<"}</button>
       {
      sliderData.map((img,i)=>(
          <div className={i=== current ? "slide active" : "slide"} key ={i}>
              {i ===current && (
                <div>
                {/* <img src={img.image} alt="slider_logo"  className='slide_image'/>   */}
                <ReactPlayer
                 url={img.image}
                 controls
                 width="1380px"
                 height="400px"
                >
                  {/* <ReactPlayer
                 url={"https://www.youtube.com/watch?v=jYJDvM3oLcE"}
                 controls
                 width="1400px"
                 height="400px"
                >

                </ReactPlayer> */}
                </ReactPlayer>
                </div>
              )}
              
          </div>
            
          ))
      }
  </div>;
}

export default Slider;
