import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    const {name,value}=e.target;
    copylogininfo[name]=value;
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
    <div className=" login w-full h-full flex justify-center items-center bg-[rbga(1,1,27)]">
      <div className="logincontainer flex flex-col w-[90%] md:w-[400px] m-[30px] p-[20px] bg-[linear-gradient(to_right,_rgba(6,182,212,0.3),_rgba(59,130,246,0.3))]  border-2 rounded-[10px] border-black  shadow-[0px_4px_15px_rgba(0, 0, 0, 0.1)] hover:shadow-[0_0_25px_#00ffff66]  ">
       
       
       <form onSubmit={handlelogin}>
  <div className='loginform flex flex-col items-center justify-center  w-[100%] h-[100%] '>
     <h2 className=' text-xl text-white font-bold py-10'>
          SIGN IN
        </h2>
    <input type="email" placeholder='Email' value={logininfo.email} className="text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px] " name='email' id="InputEmail1" onChange={change}/>
  
    <input type="password" placeholder='Password' value={logininfo.password} className="text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]" name='password' id="InputPassword1" onChange={change}/>
  
 
  <button type="submit" className="loginsubmitbutton block w-[90%] md:w-[200px] m-[20px] p-[12px] text-white text-[18px] font-bold bg-[linear-gradient(to_right,_#007bff,_#00c3ff)] border-none rounded-[8px] cursor-pointer hover:bg-[linear-gradient(to_right,_#0056b3,_#0097d1)] hover:scale-105 transition-[background,transform] duration-[300ms,200ms]" >login</button>
  </div>
  <p className='text-white font-bold'>Don’t have acount?</p>
<Link to='/signup' className='text-blue-500 font-bold hover:underline' >Signup</Link>
 
</form>
      </div>
    </div>
    </>
  )
}

export default Login