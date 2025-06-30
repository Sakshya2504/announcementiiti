import React from 'react'
import cynapticlogo from './cynapticlogo.png'
import './Individualclubpage.css'
import insta from './insta.png';
import linkedIn from './linkedIn.png';
import facebook from './facebook.png';
import { useNavigate } from 'react-router-dom';
import exampleImage from './image.png'; // relative to Events.jsx
const events = [
  {
    id: 1,
    time: '6pm today',
    location: 'Near tea post',
    name: 'Nukkad Natak',
    club: 'Avana and Aaina collab',
    image: exampleImage,
  }, {
    id: 2,
    time: '6pm today',
    location: 'Near tea post',
    name: 'Nukkad Natak',
    club: 'Avana and Aaina collab',
    image: exampleImage,
  }, {
    id: 3,
    time: '6pm today',
    location: 'Near tea post',
    name: 'Nukkad Natak',
    club: 'Avana and Aaina collab',
    image: exampleImage,
  }]

 


  


function Individualclubpage() {
   
   const navigate =useNavigate();
  return (
    <>
        <div className='clubbody'>
            <img src={cynapticlogo} alt="cynapticlogo" className='clubimage' />
        </div>
        <div className='button_con'>
         
          <button className='createeventbutton'  onClick={()=> navigate('/createevent')} >
           
          Create Event
          
          </button>
         
         
          <button className='announcebutton' onClick={()=>{navigate('/announce')}}>
            Announce
          </button>
           
        </div>
        <div>
          <h1 className='text-white font-bold text-center'>About Club</h1>
          <p className='text-white font-bold px-5 my-10'>Cynaptics Club is a dynamic community of students passionate about harnessing the power of AI and ML to push the boundaries of innovation. We believe that the future lies in the convergence of human intelligence and advanced technologies, and our club serves as a hub for knowledge sharing, skill development, and collaborative projects in this rapidly evolving field.
            Through a diverse range of activities, we provide valuable opportunities for our members to learn, experiment, and create. Our club organizes engaging guest talks by industry professionals who share their experiences, insights, and cutting-edge research, exposing our members to the latest trends and developments in AI and ML. We also host exhilarating hackathons, where you can put your skills to the test, collaborate with peers, and build innovative solutions within a limited timeframe.
             These hackathons foster teamwork, problem-solving, and creativity, and they serve as an excellent platform for honing your AI and ML skills. Additionally, we showcase our members' talents and achievements through exhibitions, where innovative AI and ML projects are displayed for the college community to see. These exhibitions not only celebrate our members' hard work but also inspire others to delve into the world of AI and ML.
              To cater to members at all levels of expertise, we regularly organize workshops that cover various AI and ML topics. From introductory sessions that lay the foundation of concepts to advanced deep learning techniques, our workshops provide a comprehensive learning experience that caters to your specific interests and goals. We understand the importance of collaboration and collective learning.
               Therefore, Cynaptics Club fosters an environment where members can share their ideas, exchange knowledge, and engage in thought-provoking conversations. These interactions facilitate a deeper understanding of AI and ML concepts and encourage critical thinking.
          </p>
        </div>
        
         <div className="p-4 bg-[#01011b] min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Club Events</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-detail border rounded-2xl shadow-md p-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 space-y-3 border-2 border-[#87CEEB]/60
            hover:border-[#33bbcf] hover:scale-[1.03] space-y-3"
          >
            <div className="event-logo flex items-center justify-center">
              <img
                alt="Event Logo"
                src={event.image}
                className="h-100 w-100"
              />
            </div>
            <div className="event-description space-y-1">
              <p className="text-white font-medium">🕒 Time: {event.time}</p>
              <p className="text-white font-medium">📍 Location: {event.location}</p>
              <p className="text-white font-semibold">🎭 Event: {event.name}</p>
              <p className="text-white">Conducted by: {event.club}</p>

              <button
                className="mt-2 bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                id={`joinEvent${event.id}`}
              >
                Explore Event
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='clubhead'>
       <h1 className='text-white font-bold  py-8 text-center'> Club Head</h1> 
       <div className='text-white w-70 lg:w-90 border rounded-2xl shadow-md p-4  bg-gradient-to-r from-cyan-500/5 to-blue-500/5 space-y-3 border-2 border-[#87CEEB]/60
            hover:border-[#33bbcf] hover:scale-[1.03]  '>
        <img src="" alt="Club Head Photo" className='text-center'/>
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
          <p className='py-2'>mail : cse240001068@iiti.ac.in</p>

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
    </>
  )
}

export default Individualclubpage