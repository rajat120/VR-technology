import React from 'react';
import ReactPlayer from 'react-player';
import Footer from './Footer';
import Header from './Header';


function VRTechnology() {
  return <div>
      <Header/>
      <br/>
      <br/>

                <br/>
                <br/>
     <h4> – Virtual Reality Technology for the Classroom</h4>
     <h5>Everything you need to implement VR in your school</h5>
     <hr/>
     <br/>
     <span>Introducing a whole new concept in educational technology provides everything you need to bring affordable, innovative virtual reality to the classroom. Designed for education,  offers a range of standalone virtual reality headsets for students of all ages.</span>
      <div style={{display:"flex", alignitem:"center", justifyContent:"space-between" }}>
      <div>
          <br/>
           <h4> Premium Headset (64GB)</h4>
          <img  style={{width:"50%", objectFit:"cover"}} src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="img"/>
     
     
        <br/>
        <br/>
   <span style={{width:"400px"}}>Our latest model from the world’s most awarded educational VR solution, the  Premium Headset (64GB), includes our highest storage capacity yet to help you deliver a fully immersive VR & AR experiences for your students with no other devices needed… it’s that easy!</span>
   </div>
  </div>
  <div style={{display:"flex"}}>
      <div>
          <br/>
  <h4> Standard Headset</h4>
  <br/>
  <br/>
  <br/>
  <span>
  The  Standard Headset was the first standalone, classroom-ready device in the education market. Designed with students in-mind,  headsets are comfortable, simple to use and reliable so virtual reality in the classroom is effortless.

  </span>
  <li>Designed for students of all ages</li>
  <li>Support virtual reality and augmented reality in the classroom</li>
  <li>Includes gesture controls for actions and navigation</li>
  </div>
  <div>
      <img style={{height:"200px", width:"300px"}} src="https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlydHVhbCUyMHJlYWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt='img'/>
  </div>
  </div>
  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between" , backgroundColor:"grey"}}>
      <div>
          <img style={{height:"200px", width:"300px"}} src="https://media.istockphoto.com/photos/woman-wearing-vr-glasses-s-picture-id1351141161?b=1&k=20&m=1351141161&s=170667a&w=0&h=OWMtLk2J6uhdQAMODXPoTFoZ7rphx0XSQcJUGsREAno=" alt="img"/>
      </div>
      <div>
          <h4>The Complete VR Solution for Education</h4>
          <span> provides all the tools you need to deliver exciting and engaging VR & AR learning experiences. Our simple classroom controls allow teachers to quickly and easily access curriculum content and manage each headset during a lesson. Not only that, all of our headsets come in ruggedised storage and charging cases to keep your headsets safe and ready to use at all times.</span>
      </div>
  </div>
  <div>
    
      <br/>
          <br/>
     <Footer/>
  </div>
  </div>;
}

export default VRTechnology;
