import React from 'react'
import cynapticlogo from './cynapticlogo.png'
import './Individualclubpage.css'
import insta from './insta.png';
import linkedIn from './linkedIn.png';
import facebook from './facebook.png';
import { useState } from 'react';
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

 function Createevent({onclose}) {
  return (
   <>
      <div className='createevent'>
        <button className='back' onClick={onclose}>✖</button>
      <form action="/individualclubpage">
      
      <h1 >Event Detailes</h1>
      <input type="text" placeholder='Event Name' name='EventName'/>
      <input type="text" placeholder='Event Date And Time' name='Event Date And Time'/>
      <input type="text" placeholder='Conducyed By' name='Conducyed By'/>
      <input type="text" placeholder='Event Info' name='Event Info'/>
      <button type="submit" className="submitbutton">Submit</button>

      </form>

     </div>
   </>
  )
}
 function Announce({onclose}) {
  return (
   <>
  <div className='announce'>
 <button className='back' onClick={onclose}>✖</button>
        <form action="/individualclubpage">
        <h1>Announcement Details</h1>
      <input type="text" placeholder='Clubname' name=''/>
      <input type="text" placeholder='Announcement Heading' name=''/>
      <input type="text" placeholder='Announcement Info' name=''/>
      <button type="submit" className="submitbutton">Submit</button>

      </form>
      

     </div>
   </>
  )
}

  


function Individualclubpage() {
   const [eventform,seteventform]=useState(false);
   const [announceform,setannounceform]=useState(false);
  return (
    <>
        <div className='clubbody'>
            <img src={cynapticlogo} alt="cynapticlogo" />
        </div>
        <div className='button_con'>
          <button className='createeventbutton' onClick={()=>seteventform(true)}>
          Create Event
          </button>
         
          <button className='announcebutton' onClick={()=>setannounceform(true)}>
            Announce
          </button>
           
        </div>
         {eventform&&<Createevent onclose={()=>seteventform(false)}/>}
         {announceform&&<Announce onclose={()=>setannounceform(false)}/>}
         <div className="p-4 bg-[rgba(1,1,27)] min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Club Events</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-detail border rounded-2xl shadow-md p-4 bg-white space-y-3"
          >
            <div className="event-logo flex items-center justify-center">
              <img
                alt="Event Logo"
                src={event.image}
                className="h-100 w-100"
              />
            </div>
            <div className="event-description space-y-1">
              <p className="text-gray-700 font-medium">🕒 Time: {event.time}</p>
              <p className="text-gray-700 font-medium">📍 Location: {event.location}</p>
              <p className="text-gray-800 font-semibold">🎭 Event: {event.name}</p>
              <p className="text-gray-600">Conducted by: {event.club}</p>

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

    </div>
        
    <footer className="bg-[rgba(1,1,27)] border border-t-[#3f3e45] text-white  bottom-0 py-10">
      <div className='footer'>
        <p>© 2023 The Cynaptics Club — @IITI</p>
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