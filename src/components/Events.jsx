import exampleImage from './image.png'; // relative to Events.jsx
import { useEffect, useState , React } from 'react';
import './Animation.css'

// const events = [
//   {
//     id: 1,
//     time: '6pm today',
//     location: 'Near tea post',
//     name: 'Nukkad Natak',
//     club: 'Avana and Aaina collab',
//     image: exampleImage,
//   },
//   ...Array.from({ length: 8 }, (_, i) => ({
//     id: i + 2,
//     time: '6pm today',
//     location: 'Near tea post',
//     name: 'Nukkad Natak',
//     club: 'Avana and Aaina collab',
//     image: exampleImage,
//   })),
// ];

export default function Events() {
  // This component fetches and displays a list of events
  // It uses the useState hook to manage the state of events
  const [events, setEvents] = useState([]);
  
  // useEffect is used to fetch the events from the server when the component mounts
  // It sends a GET request to the server to retrieve the events data
  useEffect(() => {
    const fetchEvents = async () => {

      // Fetch API is used to send a GET request to the server with the events data
      // The server will then process this data and return the list of events
      try {
        const res = await fetch('http://localhost:3000/Events');
        const data = await res.json();


        const updatedEvents = data.map((eve, index) => ({
          // ...eve is used to spread the properties of the event object
          ...eve,
          id: eve.id || index + 1,
          image: exampleImage,
        }));


        setEvents(updatedEvents);
      } catch (err) {
        console.error("Failed to load events:", err);
      }
    };
    //fecthEvents is called to fetch the events when the component mounts
    // This will trigger the useEffect hook and fetch the events from the server
    fetchEvents();
  }, []);


  return (
    
    <div className="p-4 bg-[#01011b] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">Events</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-detail rounded-2xl shadow-md p-4  bg-gradient-to-r from-cyan-500/5 to-blue-500/5 space-y-3 border-2 border-[#87CEEB]/60
            hover:border-[#33bbcf] hover:scale-[1.03] "
          >
            
    <div className='box block transform-3d perspective-[1000px] hover:rotate-y-180 transition delay-[2s]'>
       <div className='card grid relative transform-3d'>
          <div id='front ' className="event-description  col-start-1 row-start-1 space-y-1 relative backface-hidden">
              <div className="event-logo flex items-center justify-center">
              <img
                alt="Event Logo"
                src={event.image}
                className="h-100 w-100"
              />
            </div>
              <p className="text-white font-medium">🕒 Time: {event.EventDateAndTime}</p>
              <p className="text-white font-medium">📍 Info: {event.EventInfo}</p>
              <p className="text-white font-semibold">🎭 Event: {event.EventName}</p>
              <p className="text-white font-semibold">Conducted by: {event.ConductedBy}</p>


              <button
                className="mt-10 bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                id={`joinEvent${event.id}`}
              >
                Join Event
              </button>
          </div>
          <div id='back' className=' absolute col-start-1 row-start-1 flex flex-col justify-center items-center top-0 left-0 w-[100%] h-[100%] backface-hidden rotate-y-180 '>
                <h1 className='text-[#11E3FB] font-bold text-[32px] pt-[10px] pb-[10px]'>{event.EventName}</h1>
                <p className='text-white font-bold'> {event.EventInfo}</p>
                 <button
                className="mt-2 bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                id={`joinEvent${event.id}`}
              >
                Explore Event
              </button>
          </div>
      </div>
    </div>
</div>
          
        ))}
      </div>

    </div>
    
  );
}