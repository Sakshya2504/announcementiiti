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
  const [searchQuery, setSearchQuery] = useState("");


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
        <NavBar changestatus={changestatus} setissignup={setissignup} closeset={closeset} personinfo={personinfo} setpersoninfo={setpersoninfo} issignup={issignup} isOpen={isOpen} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
      />
       {isOpen&&<Set changestatus={changestatus} setissignup={setissignup} issignup={issignup} personinfo={personinfo}  setpersoninfo={setpersoninfo} closeset={closeset} isOpen={isOpen}/>} 
        <Routes>
          <Route path="/" element={<Events issignup={issignup} searchQuery={searchQuery}
          />} />
          <Route path="/clubs" element={<ClubPage />} />
        
           <Route path="/notification" element={<Notification />} />

          <Route path="/signup" element={<Signup setissignup={setissignup}  setpersoninfo={setpersoninfo} />} />
          <Route path="/login" element={<Login setissignup={setissignup}  setpersoninfo={setpersoninfo} />} />
          
          
          
          <Route path="/individualclubpage/:clubname" element={<Individualclubpage issignup={issignup} />} />
          <Route path="/createevent/:clubname" element={<Createevent/>} />
           <Route path="/announce/:clubname" element={<Announce/>} />
        </Routes>
        
      </div>

          <div className="footer-container  border border-t-[#3f3e45] bottom-0 w-full bg-[rgba(1,1,27)] text-white py-4  ">
                 <footer className="bg-[rgba(1,1,27)] border-t-[#3f3e45] text-white  bottom-0 py-5">
            <div className="max-w-7xl flex flex-col justify-between md:flex-row mx-auto px-auto  ">
              <div className='ml-3'>
                   <a href="https://www.iiti.ac.in">
            <img
              src="https://www.iiti.ac.in/public/themes/iitindore/demos/update-logo.png"
              className="logo h-15 w-15 p-0 lg:h-20 lg:w-20"
              alt="IIT Indore Logo"
            />
          </a>
                
               <p className='font-bold text-xl'>Indian Institute of Technology Indore,<br></br> Khandwa Road, Simrol, Indore 453552</p>
               <div className="Social-Handles mt-4 flex justify-start items-center  gap-10">
                                 
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
              <div className="mt-12 ml-3">
                <h2  className="hover:underline text-2xl text-[#00EAFF] font-bold">Contact us</h2>
                <p className='font-bold'>✉️ cse240001068@iiti.ac.in</p> 
                <p className='font-bold'>✉️ me240003006@iiti.ac.in</p>  
                 <p className='font-bold'>✉️ sse240021015@iiti.ac.in</p> 
              </div>
             <div className='mt-12 ml-3'>
               <h2  className="hover:underline text-2xl text-[#00EAFF] font-bold">Share</h2>
               <p className='font-bold '>https://campannounce.netlify.app</p>
             </div>
                
            </div>
            </footer>
            </div>
      </div>
  );
}

export default App;
