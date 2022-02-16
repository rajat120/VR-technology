// import React, { useState } from 'react';
// import sliderData from "./Sliderdata"
// import "./Slider.css"
// import ReactPlayer from 'react-player'
// import video1 from "./assets/video1.mp4"



// function Slider() {
// //     const [current, setcurrent] = useState(0);
// // const length= sliderData.length;

// // const prevSlide=()=>{
// //   setcurrent(current=== 0 ? length-1 : current -1 )
// // }
// // const nextSlide=()=>{
// //      setcurrent(current === length-1 ? 0 : current + 1)
// // }
// // console.log("curr",current);

// //    

// // <button  className='right_arrow' onClick={nextSlide}>{">"}</button>
// // <button className='left_arrow' onClick={prevSlide}>{"<"}</button>
// //        {
// //       sliderData.map((img,i)=>(
// //           <div className={i=== current ? "slide active" : "slide"} key ={i}>
// //               {i ===current && (
// //                 <div>
// //                 {/* <img src={img.image} alt="slider_logo"  className='slide_image'/>   */}
// //                 <ReactPlayer
// //                  url={img.image}
// //                  controls
// //                  width="50%"
// //                  height="400px"
// //                 >
// //                   {/* <ReactPlayer
// //                  url={"https://www.youtube.com/watch?v=jYJDvM3oLcE"}
// //                  controls
// //                  width="1400px"
// //                  height="400px"
// //                 >

// //                 </ReactPlayer> */}
// //                 </ReactPlayer>
// //                 </div>
// //               )}
              
// //           </div>
            
// //           ))
// //       }
// //   </div>;
// return <div className='slider'>
// <div id="demo" class="carousel slide" data-bs-ride="carousel">


// <div className="carousel-indicators">
//   <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
//   <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
//   <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
// </div>

// <div className="carousel-inner">
//   <div className="carousel-item active">
//     <video src={video1} alt="Los Angeles"  class="d-block" style={{width:"100%", textAlign:"right"}} controls/>
//   </div>
//   <div className="carousel-item">
//     <img src="chicago.jpg" alt="Chicago" class="d-block" style={{width:"100%"}}/>
//   </div>
//   <div className="carousel-item">
//     <img src="ny.jpg" alt="New York" class="d-block" style={{width:"100%"}}/>
//   </div>
// </div>


// <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
//   <span className="carousel-control-prev-icon"></span>
// </button>
// <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
//   <span className="carousel-control-next-icon"></span>
// </button>
// </div>
// </div>

// }

// export default Slider;
