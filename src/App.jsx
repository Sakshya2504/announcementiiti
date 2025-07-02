import './App.css';
import Events from './components/Events';
import NavBar from './components/NavBar';
import Individualclubpage from './components/Individualclubpage';
import ClubPage from './components/ClubPage';
import Notification from './components/Notification';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import insta from './Images/Insta.png';
import linkedIn from './Images/linkedIn.png';
import twitter from './Images/twitter.png';
import facebook from './Images/facebook.png';
import Signup from './components/Signup';
import Login from './components/Login';
import Createevent from './components/Createevent';
import Announce from './components/Announce';
import { useState } from 'react';
import Set from './components/Set';
import { useEffect } from 'react';
function App() {
  const [isOpen, setIsOpen] = useState(false);
    const [issignup,setissignup] = useState(false);
  const changestatus =() => setIsOpen(!isOpen);
  const closeset=()=> setIsOpen(false);
const [personinfo, setpersoninfo] = useState(null);


  useEffect(() => {
  const storedInfo = localStorage.getItem('personinfo');
  if (storedInfo&&storedInfo!=="undefined") {
    setpersoninfo(JSON.parse(storedInfo));
    setissignup(true);
  }
}, []);

 
  return (
    <div className="min-h-screen flex flex-col ">
     
  
      <div className="bg-[rgba(1,1,27)]">
        <NavBar changestatus={changestatus} setissignup={setissignup} closeset={closeset} personinfo={personinfo} setpersoninfo={setpersoninfo} issignup={issignup} isOpen={isOpen} />
       {isOpen&&<Set changestatus={changestatus} setissignup={setissignup} issignup={issignup} personinfo={personinfo}  setpersoninfo={setpersoninfo} closeset={closeset} isOpen={isOpen}/>} 
        <Routes>
          <Route path="/" element={<Events issignup={issignup}/>} />
          <Route path="/clubs" element={<ClubPage />} />
        
           <Route path="/notification" element={<Notification />} />

          <Route path="/signup" element={<Signup setissignup={setissignup}  setpersoninfo={setpersoninfo} />} />
          <Route path="/login" element={<Login setissignup={setissignup}  setpersoninfo={setpersoninfo} />} />
          
          
          
          <Route path="/individualclubpage" element={<Individualclubpage issignup={issignup} />} />
          <Route path="/createevent" element={<Createevent/>} />
           <Route path="/announce" element={<Announce/>} />
        </Routes>
        
      </div>

          <div className="footer-container border border-t-[#3f3e45] bottom-0 w-full bg-[rgba(1,1,27)] text-white py-4 text-center ">
                 <footer className="bg-[rgba(1,1,27)] border-t-[#3f3e45] text-white  bottom-0 py-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="mb-4 space-x-4 text-xl">
                <a href="#" className="hover:underline font-bold">Contact us</a>     
                <a href="#" className="hover:underline font-bold">Help</a>           
                <a href="#" className="hover:underline font-bold">Share</a>
              </div>
              {/* Social Media Icons */}
                <div className="Social-Handles mt-4 flex justify-center items-center  gap-10">
                                 
                <a
                  href="https://www.instagram.com/iitindoreofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={insta} alt="IIT Indore Instagram" className="h-6 w-6 md:h-8 md:w-8 hover:opacity-75" />
                </a>
          
                <a
                  href="https://www.linkedin.com/school/iit-indore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedIn} alt="IIT Indore LinkedIn" className="h-6 w-6 md:h-8 md:w-8 hover:opacity-75" />
                </a>
          
                <a
                  href="https://x.com/iitiofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="IIT Indore X" className="h-6 w-6 md:h-7 md:w-7 hover:opacity-75" />
                </a>
          
                <a
                  href="https://www.facebook.com/people/IIT-Indore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="IIT Indore Facebook" className="h-6 w-6 md:h-8 md:w-8 hover:opacity-75" />
                </a>
              </div>
            </div>
            </footer>
            </div>
      </div>
  );
}

export default App;
