import React from 'react';
import Footer from './Footer';
import Header from './Header';
 import "./Contact.css"
function Contact() {
  return <div>
      <Header/>
      <br/>
      <br/>
      <br/>
      <h1>CONTACT </h1>

<div >
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

<div className='btn'>
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
<div style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"330px", }}>
<button  style={{backgroundColor:"#0e105d", color:"#fff"}} type="submit">SEND ENQUIRY</button>
</div>
      <br/>
      <Footer/>
  </div>;
}

export default Contact;
