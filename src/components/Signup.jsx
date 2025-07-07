<<<<<<< HEAD
import React,
{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
>>>>>>> fffe534 (updated profile backend)

function Signup(props) {
  // This component allows users to sign up for an account
  // It includes a form where users can input their name, email, and password
<<<<<<< HEAD
  const navigate=useNavigate();
    const [logininfo,setlogininfo]= useState({
        name:"",
        email:"",
        password:""
      
    })
    // useState is used to manage the state of the login information
    // The initial state is an object with empty strings for name, email, and password
     const change = (e) => {
        const copylogininfo={...logininfo};
        const {name,value}=e.target;
        copylogininfo[name]=value;
        setlogininfo(copylogininfo);
    
    }
    const handlesignup= async (e)=>{
     // This function handles the signup form submission
     // It prevents the default form submission behavior, sends the data to the server,
      e.preventDefault();
    
      //Fetch API is used to send a POST request to the server with the signup data 
       try{ 
        const res = await fetch('http://localhost:3000/api/signup',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(logininfo)
        });
      const result= await res.json();
=======
  const navigate = useNavigate();
  const [logininfo, setlogininfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  // useState is used to manage the state of the login information
  // The initial state is an object with empty strings for name, email, and password
  const change = (e) => {
    const copylogininfo = { ...logininfo };
    const { className, value } = e.target;
    copylogininfo[className] = value;
    setlogininfo(copylogininfo);
  };
  const handlesignup = async (e) => {
    // This function handles the signup form submission
    // It prevents the default form submission behavior, sends the data to the server,
    e.preventDefault();

    //Fetch API is used to send a POST request to the server with the signup data
    try {
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(logininfo),
      });
      const result = await res.json();
>>>>>>> fffe534 (updated profile backend)
      console.log(result);
      //For fetching the data for profile name

      if (res.ok) {
        alert(result.message || "signup successful");
        localStorage.setItem("personinfo", JSON.stringify(result.user));
        props.setpersoninfo(result.user);
        props.setissignup(true);
        setlogininfo({
          name: "",
          email: "",
          password: "",
        });

        // After a successful signup, the user is redirected to the home page
        // This will redirect the user to the home page where they can see the announcements
        navigate("/");
      } else {
        alert(result.message || "signup failed");
      }
    } catch (error) {
      console.log(error);
      alert("signup failed");
    }
  };

  return (
<<<<<<< HEAD
    
    <div className="signup w-full h-full flex justify-center items-center bg-[rbga(1,1,27)]">
      <div className="signupcontainer flex flex-col w-[90%] md:w-[400px] m-[30px] p-[20px] bg-[linear-gradient(to_right,_rgba(6,182,212,0.3),_rgba(59,130,246,0.3))]  border-2 rounded-[10px] border-black  shadow-[0px_4px_15px_rgba(0, 0, 0, 0.1)] hover:shadow-[0_0_25px_#00ffff66]">
       
       
       <form onSubmit={handlesignup}>
  <div className='signupform flex flex-col items-center justify-center  w-[100%] h-[100%]'>
    <h2 className=' text-xl text-white font-bold py-10'>
          CREATE ACCOUNT
        </h2>
    <input type="text" className="text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]" name='name' placeholder='Username' value={logininfo.name} id="Inputusername" onChange={change} required />
    
    <input type="email" placeholder='Email' className="text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]" name='email' value={logininfo.email} id="InputEmail1" onChange={change} required/>
    <input type="password" className="text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]" name='password' placeholder='Password' value={logininfo.password} id="InputPassword1" onChange={change} required/>
     {/* <input type="password" className="confirmpassword1" placeholder='Confirm Password' value={logininfo.confirmpassword1} id="InputPassword2" onChange={change}/>   */}
  
 
  <button type="submit" className="signupsubmitbutton block w-[90%] md:w-[200px] m-[20px] p-[12px] text-white text-[18px] font-bold bg-[linear-gradient(to_right,_#007bff,_#00c3ff)] border-none rounded-[8px] cursor-pointer hover:bg-[linear-gradient(to_right,_#0056b3,_#0097d1)] hover:scale-105 transition-[background,transform] duration-[300ms,200ms]" >SIGNUP</button>
  </div>
  <p className='text-white '>Already have acoount?</p>
<Link to='/login' className='text-blue-500 font-bold hover:underline'>Login</Link>
 
</form>
=======
    <div className="signup">
      <div className="signupcontainer">
        <form onSubmit={handlesignup}>
          <div className="signupform">
            <h2 className=" text-xl text-white font-bold py-10">
              CREATE ACCOUNT
            </h2>
            <input
              type="text"
              className="name"
              placeholder="Username"
              value={logininfo.name}
              id="Inputusername"
              onChange={change}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="email"
              value={logininfo.email}
              id="InputEmail1"
              onChange={change}
              required
            />
            <input
              type="password"
              className="password"
              placeholder="Password"
              value={logininfo.password}
              id="InputPassword1"
              onChange={change}
              required
            />
            {/* <input type="password" className="confirmpassword1" placeholder='Confirm Password' value={logininfo.confirmpassword1} id="InputPassword2" onChange={change}/>   */}

            <button type="submit" className="signupsubmitbutton">
              SIGNUP
            </button>
          </div>
          <p className="text-white ">Already have acoount?</p>
          <Link to="/login" className="text-blue-500 font-bold hover:underline">
            Login
          </Link>
        </form>
>>>>>>> fffe534 (updated profile backend)
      </div>
    </div>
  );
}

export default Signup;
