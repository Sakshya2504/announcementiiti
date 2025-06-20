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
    <>
    <div className="signup">
      <div className="signupcontainer">
       
       
       <form>
  <div className='signupform'>
    <h2 className=' text-xl text-white font-bold py-10'>
          CREATE ACCOUNT
        </h2>
    <input type="text" className="name" placeholder='Username' id="Inputusername" onChange={change} />
    
    <input type="email" placeholder='Email' className="email" id="InputEmail1" onChange={change}/>
    <input type="password" className="password" placeholder='Password' id="InputPassword" onChange={change}/>
   <input type="password" className="password" placeholder='Confirm Password' id="InputPassword" onChange={change}/>
  
 
  <button type="submit" className="signupsubmitbutton">SIGNUP</button>
  </div>
  <p className='text-white '>Already have acoount?</p>
<Link to='/login' className='text-blue-500 font-bold hover:underline'>Login</Link>
 
</form>
      </div>
    </div>
    </>
  )
}

export default Signup