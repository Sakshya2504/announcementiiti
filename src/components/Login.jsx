import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import './login.css';
import { useNavigate } from 'react-router-dom'

function Login(props) {
  // This component allows users to log in to their account
  // It includes a form where users can input their email and password
    const navigate=useNavigate();
    const [logininfo,setlogininfo]=useState({
    email:"",
    password:""
})
// useState is used to manage the state of the login information
// The initial state is an object with empty strings for email and password
 const change = (e) => {
    const copylogininfo={...logininfo};
    const {className,value}=e.target;
    copylogininfo[className]=value;
    setlogininfo(copylogininfo);
}

const handlelogin = async (e)=>{
  // This function handles the login form submission
  // It prevents the default form submission behavior, sends the data to the server,
  e.preventDefault();

  //Fetch API is used to send a POST request to the server with the login data
  // The server will then process this data and authenticate the user
  try{
  const res= await fetch('http://localhost:3000/api/login',
    {method:'POST',
       headers:{'content-type':'application/json'},
          body:JSON.stringify(logininfo)
    }
  );
  const result= await res.json();
    //For fetching the data for profile name 
  
  if(res.ok){
    alert(result.message||'Login successful!');
     localStorage.setItem('personinfo',JSON.stringify(result.user));
     props.setpersoninfo(result.user);
     props.setissignup(true);
    setlogininfo({
    email:"",
    password:""
    });
  // After a successful login, the user is redirected to the home page  
    navigate('/');
  }
else{
  alert(result.message||'Invalid credentials');
}

}
catch(error){
console.error(error);
alert('Something went wrong');

}
}
  return (
    <>
    <div className="login">
      <div className="logincontainer">
       
       
       <form onSubmit={handlelogin}>
  <div className='loginform'>
     <h2 className=' text-xl text-white font-bold py-10'>
          SIGN IN
        </h2>
    <input type="email" placeholder='Email' value={logininfo.email} className="email" id="InputEmail1" onChange={change}/>
  
    <input type="password" placeholder='Password' value={logininfo.password} className="password" id="InputPassword1" onChange={change}/>
  
 
  <button type="submit" className="loginsubmitbutton" >login</button>
  </div>
  <p className='text-white'>Don’t have acount?</p>
<Link to='/signup' className='text-blue-500 font-bold hover:underline' >Signup</Link>
 
</form>
      </div>
    </div>
    </>
  )
}

export default Login