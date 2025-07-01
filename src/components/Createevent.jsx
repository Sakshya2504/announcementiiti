import { React,useState } from 'react'

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
   <div className='createvent w-full h-full flex justify-center items-center bg-[rbga(1,1,27)]'>
      <div className='createevent_con relative flex flex-col w-[90%] md:w-[400px] m-[30px] p-[20px] bg-[linear-gradient(to_right,_rgba(6,182,212,0.3),_rgba(59,130,246,0.3))]  border-2 rounded-[10px] border-black  shadow-[0px_4px_15px_rgba(0, 0, 0, 0.1)] hover:shadow-[0_0_25px_#00ffff66]'>
        <button className='back absolute top-[2px] right-[2px] cursor-pointer w-[30px] h-[30px] rounded-[5px] hover:bg-red-500 ' onClick={()=>navigate(-1)}> ❌ </button>
        
          <form action="/individualclubpage" onSubmit={handleSubmit} className='flex flex-col items-center justify-center  w-[100%] h-[100%]'>
     
    
      <h2 className='text-white font-bold text-[22px] '>Event Detailes</h2>
      <input type="text" placeholder='Event Name' className='text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]' name='EventName' value={logininfo.EventName} onChange={handleChange} />
      <input type="text" placeholder='Event Date And Time'className='text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]' name='EventDateAndTime' value={logininfo.EventDateAndTime} onChange={handleChange}/>
      <input type="text" placeholder='Conducted By' name='ConductedBy'className='text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]' value={logininfo.ConductedBy} onChange={handleChange}/>
      <input type="text" placeholder='Event Info' name='EventInfo'className='text-black block bg-white border rounded-[10px] w-[90%] md:w-[75%] h-[50px] m-[10px]' value={logininfo.EventInfo} onChange={handleChange}/>
      <button type="submit" className="submitbutton block w-[90%] md:w-[200px] m-[20px] p-[12px] text-white text-[18px] font-bold bg-[linear-gradient(to_right,_#007bff,_#00c3ff)] border-none rounded-[8px] cursor-pointer hover:bg-[linear-gradient(to_right,_#0056b3,_#0097d1)] hover:scale-105 transition-[background,transform] duration-[300ms,200ms]">Submit</button>
    
      </form>
    

     </div>
   </div>
   </>
  )
}


export default Createevent