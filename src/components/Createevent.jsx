import { React,useState } from 'react'
import './Createevent.css'
import { useNavigate } from 'react-router-dom'

 function Createevent() {

  const navigate = useNavigate();
    const [logininfo, setlogininfo] = useState({
      EventName: "",
      EventDateAndTime: "",
      ConductedBy: "",
      EventInfo: ""
    })
    const handleChange = (e) => {
      const { name, value } = e.target;
      setlogininfo(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await fetch('http://localhost:3000/Createevent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(logininfo) 
        });
  
        const result = await res.json();
        console.log(result);
  
        if (res.ok) {
          alert(result.message || 'Event Creation successful');
  
          setlogininfo({
            EventName: "",
            EventDateAndTime: "",
            ConductedBy: "",
            EventInfo: ""            
          });
        navigate('/')
  
       
        } else {
          alert(result.message || 'Event Creation failed');
        }
      } catch (error) {
        console.error('Error submitting Event:', error);
        alert('Event Submission Failed');
      }
    };


  return (
    <>
   <div className='createvent'>
      <div className='createevent_con'>
        <button className='back' onClick={()=>navigate(-1)}> ❌ </button>
        
          <form action="/individualclubpage" onSubmit={handleSubmit}>
      <div className='createeventform'>
    
      <h2>Event Detailes</h2>
      <input type="text" placeholder='Event Name' name='EventName' value={logininfo.EventName} onChange={handleChange} />
      <input type="text" placeholder='Event Date And Time' name='EventDateAndTime' value={logininfo.EventDateAndTime} onChange={handleChange}/>
      <input type="text" placeholder='Conducted By' name='ConductedBy' value={logininfo.ConductedBy} onChange={handleChange}/>
      <input type="text" placeholder='Event Info' name='EventInfo' value={logininfo.EventInfo} onChange={handleChange}/>
      <button type="submit" className="submitbutton">Submit</button>
    </div>
      </form>
    

     </div>
   </div>
   </>
  )
}


export default Createevent