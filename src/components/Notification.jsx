import './Notification.css';
import image from './image.png';

const notifi =[{anouncment_photo:image,anouncement_heading:'Headind 1',anouncment_info:'This is the first announcement.'},
  {anouncment_photo:image,anouncement_heading:'Heading 2',anouncment_info:'This is the first announcement.'},
  {anouncment_photo:image,anouncement_heading:'Heading 3',anouncment_info:'This is the first announcement.'}];
export default function Notification() {
  return( 
  <div>
    <div id="con">
     { notifi.map((e,index)=>(
      <div key={index} className="notifi">
        <img src={e.anouncment_photo} alt="image" />
        <div className='notifi_info'>
        <h1>{e.anouncement_heading}</h1>
        <p>{e.anouncment_info}</p>
        </div>
      </div>

      ))}

    </div>
  </div>
);
}
