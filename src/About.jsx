import React from 'react';
import Footer from './Footer';
import Header from './Header';
import video from './assets/video1.mp4'
import ReactPlayer from 'react-player';
import  './About.css'
import testimonal1 from "./assets/testinomial1.jpg"
import testimonal2 from "./assets/testinomial2.jpeg"
import testimonal3 from "./assets/testiomnial3.jpg"
import janvi from "./assets/janvi.jpeg"
function About() {
  return <div>
      <Header/>
      <ReactPlayer
                 url={video}
                 controls
                 width="100%"
                 height="400px"
                style={{ textAlign:"center", objectFit:"contain"}}
                />
  <h1>About Us</h1>
<div className="class1">
<p>We at LearnofiEd aim to develop a platform where learning is maximized by giving practical knowledge to students using advanced technology like Augmented reality and Virtual reality. We believe that knowledge is best retained and skills are best learned when there is a practical element attached to the learning process.
The core challenge that we have found in our learning environment is that subjects which are taught from primary school to higher studies or even in bachelor's degree do not provide much exposure to practical learning of that particular subject using advanced technology like AR and VR can be used to develop student-centered skills, community modeling skills, sensory experiences, socioeconomic issues, educational communities, living with dynamic and independent skills in everyday life, and awareness about safety and security.
We also believe in catering quality modules specially designed as per the new education policy of India. Our modules will cover the syllabus of NCERT and state boards so that everyone gets the equal opportunity to learn using advanced technology.
The core principle behind the foundation of the company is to give 360-degree learning using multiple stages which are a new concept and is yet to be tested to boost and promote practical learning.
</p></div>
<h1>Our Vision</h1>
<div className="class3">
<p>Driven by the ethos of developing simple, effective and innovative solutions to classroom challenges,  a diverse portfolio of classroom-focused products and services that are in daily use by millions of students. Learnofi-Ed has been designed with two key goals:
IMPROVED OUTCOMES THROUGH INCREASED ENGAGEMENT
BETTER KNOWLEDGE RETENTION THROUGH PERSONAL EXPERIENCE
By focusing on these specific goals we believe all students can achieve more. That is our simple mission, and it drives our daily work.
</p></div>
<h1>Our Team</h1>
<div className="class3">
<p>
Our dedicated team is comprised of experienced industry professionals, qualified teachers, developers, engineers,
 designers, and a host of talented sales, finance, administrative and operational staff, all with a desire to help children across the globe learn.
</p>

</div>
<br/>
<br/>
<div id="demo" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={testimonal2} alt="Los Angeles" width="1100" height="500" />
      <div className='carousel-caption' style={{color:"violet"}}>
        <h3>CO FOUNDER</h3>
        <p>HARSH KUMAR</p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={testimonal3} alt="Chicago" width="1100" height="500"/>
      <div className="carousel-caption"style={{color:"violet"}}>
        <h3>CO FOUNDER</h3>
        <p>RAJ SHEKHAWAT</p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={testimonal1} alt="New York" width="1100" height="500"/>
      <div className="carousel-caption" style={{color:"violet"}}>
        <h3>CO FOUNDER</h3>
        <p>PRATEEK SAXENA</p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={janvi} alt="New York" width="1100" height="500"/>
      <div className="carousel-caption" style={{color:"violet"}}>
        <h3>CO FOUNDER</h3>
        <p>JANVI GOYAL</p>
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
