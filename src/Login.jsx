import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import auth from './firebase';





function Login() {
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
    const handleLogin=async()=>{
        try {
            const user = await auth.signInWithEmailAndPassword(
                email,
                password
            );
            if(user){
                navigate("/")
    
            }
            console.log(user);
            
        } catch (error) {
            console.log(error.message)
        }
        
            }
        
    
  return <div style={{display:"flex", alignItems:"center" , justifyContent:"center" , height: "100vh", backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundImage:'url("https://media.istockphoto.com/photos/metaverse-digital-cyber-world-technology-man-with-virtual-reality-vr-picture-id1348369701?b=1&k=20&m=1348369701&s=170667a&w=0&h=W3uRsa9srlRlfeVfMBxAUpgucFhH2Iqc42kJ1HBwSVg=")'}}>
      <div>
          <h2 style={{color:"#fff"}}>Log In</h2>
          <div style={{color:"#fff"}}>
             <strong> Email Address</strong>
              <br/>
              <input value={email} onChange={(e)=> setEmail(e.target.value)} style={{ borderRadius:"10px", padding:"2px" }} type="text"></input>
          </div>
          <div style={{color:"#fff"}}>
            <strong> password</strong>
              <br/>
              <input value={password} onChange={(e)=> setPassword(e.target.value)} style={{ borderRadius:"10px",padding:"2px" }} type="text"></input>
          </div>
          <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
              <button onClick={handleLogin}
              style={{marginTop:"20px", marginRight:"100px", position:"relative", borderRadius:"10px",padding:"5px"}}>Log In</button>


          </div>
          <div>
         
          <span style={{color:"#fff"}}>
          <strong>New User ?   &nbsp; <Link to="/signup"> <span style={{color:"black",fontSize:"15px", font:"10px"}} >Sign Up</span> </Link> &nbsp; here 
         </strong> 
      </span>
      </div>
      </div>
     
  </div>;
}

export default Login;
