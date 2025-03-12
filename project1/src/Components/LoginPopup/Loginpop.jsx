import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Loginpop.css'
const Loginpop = ({setShowLogin}) => {
    const[currstate,setcurrstate]=useState("SignUp")
  return (
<div className='Loginpop'>
   <form className='login-popup-container'>
    <div className="login-popup-title">
        <h2>{currstate}</h2>
        <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)} />
    </div>
    <div className="login-popup-inputs">
        {/* {currstate==="SignUp"?<h3>Sign Up</h3>:<h3>Login</h3>} */}
        {currstate==="Login"?<></>:<input type="text" placeholder='Name' required/>}
        <input type="text" placeholder='Email' required/>
        <input type="password" placeholder='Password' required/>
    </div>
    <button>{currstate==="SignUp"?"Sign Up":"Login"}</button>
    <div className="login-popup-condition">
        <input type="checkbox" required/>
        <p>By continuing,I agree to the terms and conditions</p>
    </div>
    {currstate==="Login"?<p>Create a new account?<span onClick={()=>setcurrstate("SignUp")}>Click here</span></p>:<p>Already have an account?<span onClick={()=>setcurrstate("Login")}>Login</span></p>}
    
    
   </form>
</div>
  )
}

export default Loginpop