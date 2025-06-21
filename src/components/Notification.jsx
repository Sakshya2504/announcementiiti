import './Notification.css';
import image from './image.png';

const notifi =[{anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'},
  {anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'},
  {anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'},
  {anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'},
  {anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'},
{anouncment_photo:image,anouncement_heading:'This is the heading',anouncment_info:'This is the first announcement.'}];
export default function Notification() {
  return( 
  <>
    <div className="con">
     { notifi.map((e,index)=>(
      <div key={index} className="notifi">
    
        <div className='notifi_info'>
        <h1>{e.anouncement_heading}</h1>
        <p>{e.anouncment_info}</p>
        </div>
        <div className='image_con'>
         <img src={e.anouncment_photo} alt="image" />
         </div>
      </div>

      ))}

    </div>
  </>
);
}
