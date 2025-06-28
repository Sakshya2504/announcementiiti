import './Notification.css';
import image from './image.png';
import { useEffect, useState } from 'react';


const notifi =[{anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'},
  {anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'},
  {anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'},
  {anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'},
  {anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'},
  {anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'}];
export default function Notification() {
  const [notifi, setNotifi] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch('http://localhost:3000/notification');
        const data = await res.json();

        // Augment each announcement with a static image
        const filled = data.map(ann => ({
          anouncment_photo: image,
          anouncement_heading: ann.heading,
          anouncment_info: ann.info
        }));
        setNotifi(filled);
      } catch (err) {
        console.error("Failed to load notifications:", err);
      }
    };

    fetchAnnouncements();
  }, []);

  

  

  return( 
  <>
    <div className="con ">
     { notifi.map((e,index)=>(
      <div key={index} className="notifi "> 
    
        <div className='notifi_info'>
        <h1>{e.anouncement_heading}</h1>
        <p>{e.anouncment_info}</p>
        </div>
        <div className='image_con '>
         <img src={e.anouncment_photo} alt="image" />
         </div>
      </div>

      ))}

    </div>
  </>
);
}
