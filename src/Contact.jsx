import React from 'react';
import Footer from './Footer';
import Header from './Header';
 import "./Contact.css"
function Contact() {
  return <div style={{backgroundColor:"gray",width:"100%", textAlign:"center"}}>
      <Header/>
      <br/>
      <br/>
      <br/>
      <div >
      <div >
      <h1 style={{textAlign:"center",marginLeft:"20px"}}>CONTACT </h1>

{/* <form className='form'>
<p className='label'>Your Name:</p>
<input className='text' type="text"></input>

<p className='label'>Your Email Address:</p>
<input className='text' type="email"></input>

<p className='label'>Your Organisation name:</p>
<input className='text' type="text"></input>

<p className='label'>Your Location:</p>
<input className='text' type="text"></input>

<p className='label'>How Can We Help?</p>
<textarea className='text' type="text"></textarea>

<p className='label'>Your message:</p>
<textarea className='text'></textarea>

<button type="submit">SEND ENQUIRY</button>
</form> */}
{/* <table>
<tr>
<td>Your Name:</td>
<td>&nbsp;</td>
<td><input className='text' type="text"></input></td>
</tr>
<tr>
<td>Your Email Address:</td>
<td>&nbsp;</td>
<td><input className='text' type="text"></input></td>
</tr>
<tr>
<td>Your Organisation name:</td>
<td>&nbsp;</td>
<td><input className='text' type="text"></input></td>
</tr>
</table> */}

<div className='btn'  style={{color:"#fff"}}>
<table>
<tr>
<td>Your Name:</td>
<td>&nbsp;</td>
<td><input className='text' type="text"></input></td>
</tr>
<tr>
<td>Your Email Address:</td>
<td>&nbsp;</td>
<td><input className='text' type="text"></input></td>
</tr>
<tr>
<td>Your Organisation name:</td>
<td>&nbsp;</td>
<td><input className='text' type="text"></input></td>
</tr>
<tr>
<td>Your Location:</td>
<td>&nbsp;</td>
<td><input className='text' type="text"></input></td>
</tr>
<tr>
<td>How Can We Help?</td>
<td>&nbsp;</td>
<td><textarea className='text' type="text"></textarea></td>
</tr>
<tr>
<td>Your message:</td>
<td>&nbsp;</td>
<td><textarea className='text'></textarea></td>
</tr>
<tr>
<td></td>
</tr>
</table>

</div>
</div>

<br/>

<button  style={{backgroundColor:"#0e105d", color:"#fff", marginLeft:"330px"}} type="submit">SEND ENQUIRY</button>
<br/> 
<br/>
<div className='follow'>
  <h1 style={{textAlign:"center",marginLeft:"20px"}}>Follow us </h1>
  <div style={{marginLeft:"20px"}}>
  <a href="https://www.instagram.com/learnofied/?utm_medium=copy_link">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdE21hRnfQEwDwtNBQlka6KvtMTXtvDErTA&usqp=CAU"
								style={{ height: "70px", padding: "10px" }}
								alt="logo"
							/>
						</a>
						<a href="https://youtube.com/channel/UCxlMjCJ2fCmLQTfnIz4ahlQ">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/2048px-YouTube_social_white_square_%282017%29.svg.png"
								alt="logo"
								style={{ height: "70px", padding: "10px" }}
							/>
						</a>

						<a href="https://www.facebook.com/Learnofi-ED-107002838581999">
							<img
								src="data:image/png;base64,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"
								alt="logo"
								style={{ height: "70px", padding: "10px" }}
							/>
						</a>
</div>
</div>

</div>
      <br/>
      
     
      <Footer/>
    
      
  </div>;
}

export default Contact;
