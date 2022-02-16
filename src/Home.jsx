import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MiddleSection from './MiddleSection';
import Slider from './Slider';

function Home() {
  return <div>  
      <Header/> 
     {/* <div style={{padding:"20px"}}></div> */}
      <MiddleSection/>
      <Footer/>
  </div>;
}

export default Home;
