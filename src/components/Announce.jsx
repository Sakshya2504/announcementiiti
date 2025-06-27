import {React,useState} from 'react'
import './Announce.css'
import { useNavigate } from 'react-router-dom'

function Announce() {
  const navigate = useNavigate();
  const [logininfo, setlogininfo] = useState({
    clubname: "",
    heading: "",
    info: ""

  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogininfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      navigate('/notification')

     
      } else {
        alert(result.message || 'Announcement failed');
      }
    } catch (error) {
      console.error('❌ Error submitting announcement:', error);
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