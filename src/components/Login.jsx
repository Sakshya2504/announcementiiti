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
    <div className="login">
      <div className="logincontainer">
       
        <p>
          USER LOGIN
        </p>
       <form>
  <div className='loginform'>
    <label for="InputEmail1">EMAIL ADRESS</label>
    <input type="email" className="email" id="InputEmail1" onChange={change}/>
    
  
 
    <label for="InputPassword">PASSWORD</label>
    <input type="password" className="password" id="InputPassword"/>
  
 
  <button type="submit" className="loginsubmitbutton" >login</button>
  </div>
  <p>Doesnot have acount?</p>
<Link to='/signup'>Signup</Link>
 
</form>
      </div>
    </div>
  )
}

export default Login