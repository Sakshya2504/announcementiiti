// import React from 'react'
import './Announce.css'
import { useNavigate } from 'react-router-dom'
 function Announce() {
    const navigate= useNavigate();
  return (
   <>
  <div className='announce'>
    <div className='announce_con'>
 <button className='back' onClick={()=>navigate(-1)}>❌</button>
        <form action="/individualclubpage">
        <h2>Announcement Details</h2>
      <input type="text" placeholder='Clubname' name=''/>
      <input type="text" placeholder='Announcement Heading' name=''/>
      <input type="text" placeholder='Announcement Info' name=''/>
      <button type="submit" className="submitbutton">Submit</button>

      </form>
      </div>

     </div>
   </>
  )
}

export default Announce