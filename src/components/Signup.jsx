import React,
{ useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
function Signup(props) {
  const navigate=useNavigate();
    const [logininfo,setlogininfo]= useState({
        name:"",
        email:"",
        password:""
      
    })
     const change = (e) => {
        const copylogininfo={...logininfo};
        const {className,value}=e.target;
        copylogininfo[className]=value;
        setlogininfo(copylogininfo);
    
    }
    const handlesignup= async (e)=>{
      //  const {name1,email1,password1,confirmpassword1}={...logininfo};
      e.preventDefault();

      // if(!name1||!email1||!password1||!confirmpassword1||password1!==confirmpassword1){
      // alert('PLEASE FILL ALL DETAILS CORRECTLY');
      // }
    
       try{ 
        const res = await fetch('http://localhost:3000/api/signup',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(logininfo)
        });
      const result= await res.json();
      console.log(result);
      //For fetching the data for profile name 
      const profile = result.name;
      console.log(profile);
      if(res.ok){
        alert(result.message||'signup successful');
        localStorage.setItem('personinfo',JSON.stringify(logininfo));
        props.setpersoninfo(logininfo);
        props.setissignup(true);
        setlogininfo( { 
          name:"",
        email:"",
        password:""
    });
    navigate('/');

      }
      else{
        alert(result.message||'signup failed');
      }
    }
      catch(error){
        console.log(error);
        alert('signup failed');


      }
      }

    
     
  return (
    
    <div className="signup">
      <div className="signupcontainer">
       
       
       <form onSubmit={handlesignup}>
  <div className='signupform'>
    <h2 className=' text-xl text-white font-bold py-10'>
          CREATE ACCOUNT
        </h2>
    <input type="text" className="name" placeholder='Username' value={logininfo.name} id="Inputusername" onChange={change} required />
    
    <input type="email" placeholder='Email' className="email" value={logininfo.email} id="InputEmail1" onChange={change} required/>
    <input type="password" className="password" placeholder='Password' value={logininfo.password} id="InputPassword1" onChange={change} required/>
     {/* <input type="password" className="confirmpassword1" placeholder='Confirm Password' value={logininfo.confirmpassword1} id="InputPassword2" onChange={change}/>   */}
  
 
  <button type="submit" className="signupsubmitbutton" >SIGNUP</button>
  </div>
  <p className='text-white '>Already have acoount?</p>
<Link to='/login' className='text-blue-500 font-bold hover:underline'>Login</Link>
 
</form>
      </div>
    </div>
    
  )
}

export default Signup

