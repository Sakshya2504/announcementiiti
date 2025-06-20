import './App.css';
import Events from './components/Events';
import NavBar from './components/NavBar';
import Individualclubpage from './components/individualclubpage';
import ClubPage from './components/ClubPage';
import Notification from './components/Notification';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import insta from './Images/Insta.png';
import linkedIn from './Images/linkedIn.png';
import twitter from './Images/twitter.png';
import facebook from './Images/facebook.png';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (
    <div className="min-h-screen flex flex-col">
       <div className="container-fluid ">
            <div className="bg-gray-800 text-white hidden md:flex  gap-4 items-center top-0 py-8 "> 
                <p className="headingclass text-2xl items-center justify-center text-white "> भारतीय प्रौद्योगिकी संस्थान इंदौर  Indian Institute of Technology Indore</p> 
             
               </div>
               
        <div className="md:hidden">
           <div className="bg-gray-800 text-white  top-0 py-10 "> 
          <p className="headingclass text-xl items-center text-white "> भारतीय प्रौद्योगिकी संस्थान इंदौर <br></br> Indian Institute of Technology Indore</p>
        </div>
        </div>
        </div>
    <Router>
      <div className="bg-[rgba(1,1,27)]">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/clubs" element={<ClubPage />} />
        
           <Route path="/notification" element={<Notification />} />

          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          
          <Route path="/individualclubpage" element={<Individualclubpage />} />
        </Routes>
        
      </div>
    </Router>

          <div className="footer-container border border-t-[#3f3e45] bottom-0 w-full bg-[rgba(1,1,27)] text-white py-4 text-center z-50">
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
