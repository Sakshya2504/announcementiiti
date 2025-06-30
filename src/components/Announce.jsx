import {React,useState} from 'react'
import './Announce.css'
import { useNavigate } from 'react-router-dom'

function Announce() {
  // This component allows users to create an announcement for a club
  // It includes a form where users can input the club name, announcement heading, and announcement
  const navigate = useNavigate();
  const [logininfo, setlogininfo] = useState({
    clubname: "",
    heading: "",
    info: ""

  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    // This function updates the state of logininfo when the user types in the input fields
    // It uses the name attribute of the input field to determine which part of the state to
    //...prev spread operator to keep the previous state and only update the changed field
    //...value is the new value entered by the user
    setlogininfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    // This function handles the form submission
    // It prevents the default form submission behavior, sends the data to the server,
    e.preventDefault();

    //Fetch API is used to send a POST request to the server with the announcement data
    // The server will then process this data and create a new announcement in the database
    try {
      const res = await fetch('http://localhost:3000/announce', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logininfo) 
      });

      const result = await res.json();
      console.log(result);

      if (res.ok) {
        alert(result.message || 'Announcement successful');

        setlogininfo({
          clubname: "",
          heading: "",
          info: ""
        });

      // If the announcement is successful, navigate to the notification page
      // This will redirect the user to the notification page where they can see the announcement
      navigate('/notification')

     
      } else {
        alert(result.message || 'Announcement failed');
      }
    } catch (error) {
      console.error(' Error submitting announcement:', error);
      alert('Announcement Submission Failed');
    }
  };

  return (
    <>
      <div className='announce'>
        <div className='announce_con'>
          <button className='back' onClick={() => navigate(-1)}>❌</button>
          <form action="/individualclubpage" onSubmit={handleSubmit}>
            <h2>Announcement Details</h2>
            <input
              type="text"
              placeholder="Clubname"
              name="clubname"
              value={logininfo.clubname}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Announcement Heading"
              name="heading"
              value={logininfo.heading}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Announcement Info"
              name="info"
              value={logininfo.info}
              onChange={handleChange}
            />
            <button type="submit" className="submitbutton">Submit</button>

          </form>
        </div>

      </div>
    </>
  )
}

export default Announce