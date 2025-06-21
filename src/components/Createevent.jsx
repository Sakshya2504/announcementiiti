import React from 'react'
import './Createevent.css'
import { useNavigate } from 'react-router-dom'
 function Createevent() {
    const navigate=useNavigate();
  return (
    <>
   <div className='createvent'>
      <div className='createevent_con'>
        <button className='back' onClick={()=>navigate(-1)}> ❌ </button>
        
      <form action="/individualclubpage">
      <div className='createeventform'>
    
      <h2>Event Detailes</h2>
      <input type="text" placeholder='Event Name' name='EventName'/>
      <input type="text" placeholder='Event Date And Time' name='Event Date And Time'/>
      <input type="text" placeholder='Conducyed By' name='Conducyed By'/>
      <input type="text" placeholder='Event Info' name='Event Info'/>
      <button type="submit" className="submitbutton">Submit</button>
    </div>
      </form>
    

     </div>
   </div>
   </>
  )
}


export default Createevent