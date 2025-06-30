import { React,useState } from 'react'
import './Createevent.css'
import { useNavigate } from 'react-router-dom'

 function Createevent() {

  const navigate = useNavigate();
  // This component allows users to create an event for a club
  // It includes a form where users can input the event name, date and time, conducted by, and event info
    // useState is used to manage the state of the event information
    const [logininfo, setlogininfo] = useState({
      EventName: "",
      EventDateAndTime: "",
      ConductedBy: "",
      EventInfo: ""
    })

    // This function updates the state of logininfo when the user types in the input fields
    const handleChange = (e) => {
      const { name, value } = e.target;
      setlogininfo(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e) => {
      // This function handles the form submission
      // It prevents the default form submission behavior, sends the data to the server,
      e.preventDefault();
      
      //Fetch API is used to send a POST request to the server with the event data
      // The server will then process this data and create a new event in the database
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

          // If the event creation is successful, navigate to the individual club page
          // This will redirect the user to the individual club page where they can see the event
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