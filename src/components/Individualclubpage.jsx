import React from 'react'
import cynapticlogo from './cynapticlogo.png'
import './Individualclubpage.css'
import insta from '../Images/insta.png';
import linkedIn from '../Images/linkedIn.png';
import facebook from '../Images/facebook.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import exampleImage from '../Images/image.png'; // relative to Events.jsx
const events = [
  {
    id: 1,
    time: '6pm today',
    location: 'Near tea post',
    name: 'Nukkad Natak',
    club: 'Avana and Aaina collab',
    image: exampleImage,
    info:'An online hackathon by Nuvepro with 400+ participants and 50 teams developing blockchain-based solutions The event featured expert-led workshops, coding sessions, and industry interactions. Total prize pool was 40k INR'
  }, {
    id: 2,
    time: '6pm today',
    location: 'Near tea post',
    name: 'Nukkad Natak',
    club: 'Avana and Aaina collab',
    image: exampleImage,
    info:'An online hackathon by Nuvepro with 400+ participants and 50 teams developing blockchain-based solutions The event featured expert-led workshops, coding sessions, and industry interactions. Total prize pool was 40k INR'
  }, {
    id: 3,
    time: '6pm today',
    location: 'Near tea post',
    name: 'Nukkad Natak',
    club: 'Avana and Aaina collab',
    image: exampleImage,
    info:'An online hackathon by Nuvepro with 400+ participants and 50 teams developing blockchain-based solutions The event featured expert-led workshops, coding sessions, and industry interactions. Total prize pool was 40k INR',
  }]

 


  


function Individualclubpage(props) {
  const {clubname} = useParams();
  const [register,setregister]=useState(false);
      const [registerinfo, setregisterinfo] = useState({
          Name: "",
          EmailAddress: "",
          RollNumber:"",
          Program:"",
          Branch:"",
          PhoneNumber: "",
          
        })
        const handleChange = (e) => {
        const { name, value } = e.target;
        setregisterinfo(prev => ({ ...prev, [name]: value }));
      };
       
      const handleSubmit = async (e) => {
        // This function handles the form submission
        // It prevents the default form submission behavior, sends the data to the server,
        e.preventDefault();
      }
   
   const navigate =useNavigate();
  return (
    <>
    <div>
        <div className='clubbody'>
            <img src={cynapticlogo} alt="cynapticlogo" className='clubimage' />
        </div>
        <div className='button_con'>
         
          <button className='createeventbutton'  onClick={()=> navigate(`/createevent/${clubname}`)} >
           
          Create Event
          
          </button>
         
         
          <button className='announcebutton' onClick={()=>{navigate(`/announce/${clubname}`)}}>
            Announce
          </button>
           
        </div>
        <div>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#00EAFF] via-[#4DD9FF] to-[#AAF0FF] font-bold text-center'>About Club</h1>
          <p className='club-info text-white font-bold px-5 my-10'>Cynaptics Club is a dynamic community of students passionate about harnessing the power of AI and ML to push the boundaries of innovation. We believe that the future lies in the convergence of human intelligence and advanced technologies, and our club serves as a hub for knowledge sharing, skill development, and collaborative projects in this rapidly evolving field.
            Through a diverse range of activities, we provide valuable opportunities for our members to learn, experiment, and create. Our club organizes engaging guest talks by industry professionals who share their experiences, insights, and cutting-edge research, exposing our members to the latest trends and developments in AI and ML. We also host exhilarating hackathons, where you can put your skills to the test, collaborate with peers, and build innovative solutions within a limited timeframe.
             These hackathons foster teamwork, problem-solving, and creativity, and they serve as an excellent platform for honing your AI and ML skills. Additionally, we showcase our members' talents and achievements through exhibitions, where innovative AI and ML projects are displayed for the college community to see. These exhibitions not only celebrate our members' hard work but also inspire others to delve into the world of AI and ML.
              To cater to members at all levels of expertise, we regularly organize workshops that cover various AI and ML topics. From introductory sessions that lay the foundation of concepts to advanced deep learning techniques, our workshops provide a comprehensive learning experience that caters to your specific interests and goals. We understand the importance of collaboration and collective learning.
               Therefore, Cynaptics Club fosters an environment where members can share their ideas, exchange knowledge, and engage in thought-provoking conversations. These interactions facilitate a deeper understanding of AI and ML concepts and encourage critical thinking.
          </p>
        </div>
        
         <div className="p-4 bg-[#01011b] min-h-screen">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00EAFF] via-[#4DD9FF] to-[#AAF0FF] mb-6 text-center">Club Events</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-detail  rounded-2xl shadow-md p-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 space-y-3 border-3 border-[#87CEEB]
            hover:border-[#33bbcf] hover:-translate-y-3 "
          >
           

         <div className='box'>
          <div className='card'>
            <div id='front' className="event-description space-y-1">
              <div className="event-logo flex items-center justify-center">
              <img
                alt="Event Logo"
                src={event.image}
                className="h-100 w-100"
              />
            </div>
              <p className="text-white font-medium">🕒 Time: {event.time}</p>
              <p className="text-white font-medium">📍 Location: {event.location}</p>
              <p className="text-white font-semibold">🎭 Event: {event.name}</p>
              <p className="text-white font-semibold">Conducted by: {event.club}</p>
              </div>
              <div id='back'>
                <h1 >{event.name}</h1>
                <p> {event.info} </p>
                 <button
                className="my-10 bg-blue-500 cursor-pointer text-white px-4 py-2  rounded hover:bg-blue-700 transition"
                id={`joinEvent${event.id}`}
                onClick={()=>
                 { if(props.issignup){setregister(true)}
                   else{navigate('/signup')
                    alert('Please verify your email to continue.')
                   }
                }}
              >
                Join Event
              </button>
              </div>
              </div>
          </div>
      </div>
        ))}
      </div>
      <div className='clubhead'>
       <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#00EAFF] via-[#4DD9FF] to-[#AAF0FF] font-bold  py-8 text-center'> Club Head</h1> 
       <div className='text-white w-70 lg:w-90 border-4 rounded-2xl shadow-md p-4  bg-gradient-to-r from-cyan-500/5 to-blue-500/5 space-y-3  border-[#87CEEB]
            hover:border-[#33bbcf] hover:-translate-y-3  '>
        <img src={null} alt="Club Head Photo" className='text-center'/>
        <p className='text-center font-bold'>Club Head Name</p>
        <h2 className='font-bold'>About</h2>
        <p>I am a 4th Year Student, Currently Pursuing My B.Tech In CSE</p>
        <h2 className='font-bold'>Contact</h2>
        
           <a
        href="#"
         target="_blank"
         rel="noopener noreferrer"
         >
         <img src={linkedIn} alt="linkedin" className="w-5 h-5 my-2" />
          </a>
          <p className='py-2'>📧 cse240001068@iiti.ac.in</p>

       </div>
      </div>

    </div>
  
        
    <footer className="bg-[rgba(1,1,27)] border border-t-[#3f3e45] text-white  bottom-0 py-10">
      <div className='footer'>
        <div>© 2023 The Cynaptics Club — @IITI</div>
      <a
        href="https://www.instagram.com/cynapticsclubiiti"
         target="_blank"
         rel="noopener noreferrer"
         >
         <img src={insta} alt="Instagram" className="imagelogo" />
          </a>
           <a
        href="https://www.linkedin.com/company/cynaptics-club-iiti-indore/mycompany/"
         target="_blank"
         rel="noopener noreferrer"
         >
         <img src={linkedIn} alt="linkedin" className="imagelogo" />
          </a>
          <a
        href="#"
         target="_blank"
         rel="noopener noreferrer"
         >
         <img src={facebook} alt="facebook" className="imagelogo" />
          </a>
          </div>
           

        </footer>

    </div>
    {register&&
      
   <div className='fixed top-0 z-1000 w-[100%] h-[100%] flex justify-center items-center '>
      <div className=' fixed flex flex-col w-[90%] md:w-[400px] m-[30px] p-[20px] bg-[linear-gradient(to_right,_rgba(6,182,212),_rgba(59,130,246))]  border-2 rounded-[10px] border-black  shadow-[0px_4px_15px_rgba(0, 0, 0, 0.1)]  hover:shadow-[0_0_25px_#00ffff66]'>
        <button className='back absolute top-[2px] right-[2px] cursor-pointer w-[30px] h-[30px] rounded-[5px] hover:bg-red-500 ' onClick={()=>setregister(false)}> ❌ </button>
        
          <form action="/" onSubmit={handleSubmit} className='flex flex-col items-center justify-center  w-[100%] h-[100%]'>
     
    
      <h2 className='text-white font-bold text-[22px] '>Event Registration</h2>
      <input type="text" placeholder=' Name' className='text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]' name='Name' value={registerinfo.Name} onChange={handleChange} />
      <input type="text" placeholder='EmailAddress'className='text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]' name='EmailAddress' value={registerinfo.EmailAddress} onChange={handleChange}/>
      <input type="text" placeholder='RollNumber'className='text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]' name='RollNumber' value={registerinfo.RollNumber} onChange={handleChange}/>
      <input type="text" placeholder='Program'className='text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]' name='Program' value={registerinfo.Program} onChange={handleChange}/>
      <input type="text" placeholder='Branch'className='text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]' name='Branch' value={registerinfo.Branch} onChange={handleChange}/>
      <input type="text" placeholder='PhoneNumber' name='PhoneNumber'className='text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]' value={registerinfo.PhoneNumber} onChange={handleChange}/>
      <button type="submit" className="submitbutton block w-[90%] md:w-[200px] m-[20px] p-[12px] text-white text-[18px] font-bold bg-[linear-gradient(to_right,_#007bff,_#00c3ff)] border-none rounded-[8px] cursor-pointer hover:bg-[linear-gradient(to_right,_#0056b3,_#0097d1)] hover:scale-105 transition-[background,transform] duration-[300ms,200ms]">Register</button>
    
      </form>
    

     </div>
   </div>

    }
    </>
  )
}

export default Individualclubpage