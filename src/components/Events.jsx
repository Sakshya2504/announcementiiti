import exampleImage from './image.png'; // relative to Events.jsx
import insta from './insta.png';
import linkedIn from './linkedIn.png';
import twitter from './twitter.png';
import facebook from './facebook.png';
const events = [
  {
    id: 1,
    time: '6pm today',
    location: 'Near tea post',
    name: 'Nukkad Natak',
    club: 'Avana and Aaina collab',
    image: exampleImage,
  },
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 2,
    time: '6pm today',
    location: 'Near tea post',
    name: 'Nukkad Natak',
    club: 'Avana and Aaina collab',
    image: exampleImage,
  })),
];

export default function Events() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Events</h1>

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

       <footer className="footer-home mt-4 text-center cursor-pointer text-xl bg-gray-600 justify-baseline text-white space-x-2">
                      <span>Contact us            </span>
                      <span>|       Help          </span>
                      <span>|      Share          </span>
              
                      <div className="Social-Handles mt-10 flex justify-center items-center gap-10">
                        <a
                          href="https://www.instagram.com/iitindoreofficial"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={insta} alt="IIT Indore Instagram" className="h-8 w-8" />
                        </a>
              
                        <a
                          href="https://www.linkedin.com/school/iit-indore"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={linkedIn} alt="IIT Indore LinkedIn" className="h-8 w-8" />
                        </a>
              
                        <a
                          href="https://x.com/iitiofficial"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={twitter} alt="IIT Indore X" className="h-6 w-6" />
                        </a>
              
                        <a
                          href="https://www.facebook.com/people/IIT-Indore"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={facebook} alt="IIT Indore Facebook" className="h-8 w-8" />
                        </a>
                      </div>
                    </footer>
      
    </div>
  );
}