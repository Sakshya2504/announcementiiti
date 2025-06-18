import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
function Signup() {
    const [logininfo,setlogininfo]= useState({
        name:"",
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
    
    <div className="signup">
      <div className="signupcontainer">
       
        <p>
          USER SIGNUP
        </p>
       <form>
  <div className='signupform'>
    <label for="Inputusername"> USER NAME</label>
    <input type="text" className="name" id="Inputusername" onChange={change} />
    <label for="InputEmail1"> EMAIL ADRESS</label>
    <input type="email" className="email" id="InputEmail1" onChange={change}/>
    
  
 
    <label for="InputPassword1"> PASSWORD</label>
    <input type="password" className="password" id="InputPassword" onChange={change}/>
  
 
  <button type="submit" className="signupsubmitbutton">SIGNUP</button>
  </div>
  <p>Already have acoount?</p>
<Link to='/login'>Login</Link>
 
</form>
      </div>
    </div>
  )
}

export default Signup