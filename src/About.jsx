import React from 'react';
import Footer from './Footer';
import Header from './Header';
import video from './assets/video1.mp4'
import ReactPlayer from 'react-player';
import  './About.css'
import testimonal1 from "./assets/testinomial1.jpg"
import testimonal2 from "./assets/testinomial2.jpeg"
import testimonal3 from "./assets/testiomnial3.jpg"

function About() {
  return <div>
      <Header/>
      <ReactPlayer
                 url={video}
                 controls
                 width="1380px"
                 height="400px"
                />
  <h1>About Us</h1>
<div className="class1">
<p><br/><br/>We at LearnofiEd aim to develop a  platform where learning is maximised by giving practical knowledge to students using advanced technology like Augmented reality and virtual reality.
We believe that knowledge is more retained and skills are best learned when there is practical element attached to theoretical knowledge.

The core challenge that we have found in our learning environment is that subjects which are taught from primary school to higher studies or even in bachelor's degree.<br></br></p>
</div>
<h1>Our Vision</h1>
<div className="class3">
<p><br/><br/>Driven by the ethos of developing simple, effective and innovative solutions to classroom challenges, Avantis boasts a diverse portfolio of classroom-focused products and services that are in daily use by millions of students. ClassVR has been designed with two key goals:
IMPROVED OUTCOMES THROUGH INCREASED ENGAGEMENT
BETTER KNOWLEDGE RETENTION THROUGH PERSONAL EXPERIENCE
By focusing on these specific goals we believe all students can achieve more. That is our simple mission, and it drives our daily work.
</p><br/><br/></div>
<h1>Our Team</h1>
<div className="class3">
<p>
Our dedicated team is comprised of experienced industry professionals, qualified teachers, developers, engineers,
 designers, and a host of talented sales, finance, administrative and operational staff, all with a desire to help children across the globe learn.
</p>

</div>
<div id="demo" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={testimonal2} alt="Los Angeles" width="1100" height="500"/>
      <div className="carousel-caption" style={{color:"coral"}}>
        <h3>CO FOUNDER</h3>
        <p>HARSH KUMAR</p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={testimonal3} alt="Chicago" width="1100" height="500"/>
      <div className="carousel-caption"style={{color:"coral"}}>
        <h3>CO FOUNDER</h3>
        <p>RAJ SHEKHAWAT</p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={testimonal1} alt="New York" width="1100" height="500"/>
      <div className="carousel-caption" style={{color:"coral"}}>
        <h3>CO FOUNDER</h3>
        <p>PRATEEK SAXENA</p>
      </div>   
    </div>
  </div>
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>

    
  
      <Footer/>
  </div>;
}

export default About;
