
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import auth from './firebase';




function Signup() {
    
    const [userid, setUserID]= useState("");
    const [password, setPassword]= useState("");
    const [confpassword, setConfPassword]= useState("");
    const [user, setUser]= useState({})
    console.log("userid", userid);
    
    auth.onAuthStateChanged((currentUser)=>{
        setUser(currentUser)
    })

    const  handleSingup= async()=>{
    try {
        const user = await auth.createUserWithEmailAndPassword(
            userid,
            password
        );
        console.log(user);
        
    } catch (error) {
        console.log(error.message)
    }
    
        }
    

  return (
    <div style={{display:"flex", alignItems:"center" , flexDirection:"column", justifyContent:"center" , height: "100vh", backgroundImage:'url("https://media.istockphoto.com/photos/woman-wearing-a-vr-headset-at-work-picture-id1305158903?b=1&k=20&m=1305158903&s=170667a&w=0&h=GvRg7AAIilQS31Q946iUt6KTCZQlAEkU5GKujgjOHEI=")', backgroundRepeat:"no-repeat", backgroundSize:"cover",objectFit:"contain"}}>
        <div style={{color:"#fff"}}>
            <strong>Username:</strong>
            <br/>
            <input value={userid} onChange={(e)=> setUserID(e.target.value)} style={{ borderRadius:"10px", padding:"2px" }} type="text"></input>
        </div>
        <div style={{color:"#fff"}}>
           <strong>Password:</strong> 
            <br/>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} style={{ borderRadius:"10px", padding:"2px" }} type="password"></input>
        </div>
        <div style={{color:"#fff"}}>
            <button onClick={handleSingup} style={{marginTop:"20px", position:"relative", borderRadius:"10px",padding:"5px"}}>Sign Up</button>
        </div>
     
        <span style={{color:"#fff"}}>
            <strong>if you  already have an account , <span ><Link style={{color:"#dfff00"}} to="/login">Login</Link></span> &nbsp;  here
            </strong>  
        </span>
    {/* {user.email} login here */}
    </div>
  )
}

export default Signup