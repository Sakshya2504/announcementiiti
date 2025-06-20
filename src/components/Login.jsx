import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import './login.css';






function Login() {
    
const [logininfo,setlogininfo]=useState({
    email:"",
    password:""
})
 const change = (e) => {
    const copylogininfo={...logininfo};
    const [className,value]=e.target;
    copylogininfo[className]=value;
    setlogininfo(copylogininfo);

}
 
  return (
    <>
    <div className="login">
      <div className="logincontainer">
       
       
       <form>
  <div className='loginform'>
     <h2 className=' text-xl text-white font-bold py-10'>
          SIGN IN
        </h2>
    <input type="email" placeholder='Email or Username' className="email" id="InputEmail1" onChange={change}/>
  
    <input type="password" placeholder='Password' className="password" id="InputPassword"/>
  
 
  <button type="submit" className="loginsubmitbutton" >login</button>
  </div>
  <p className='text-white'>Doesnot have acount?</p>
<Link to='/signup' className='text-blue-500 font-bold hover:underline' >Signup</Link>
 
</form>
      </div>
    </div>
    </>
  )
}

export default Login