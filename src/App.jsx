import "./App.css";
import Events from "./components/Events";
import NavBar from "./components/NavBar";
import Individualclubpage from "./components/Individualclubpage";
import ClubPage from "./components/ClubPage";
import ClubDetails from "./components/Clubdetails";
import Notification from "./components/Notification";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Createevent from "./components/Createevent";
import Announce from "./components/Announce";
import Set from "./components/Set";
import Searchbar from "./components/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import insta from "./components/Images/Insta.png";
import linkedIn from "./components/Images/linkedIn.png";
import twitter from "./components/Images/twitter.png";
import facebook from "./components/Images/facebook.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [issignup, setissignup] = useState(false);
  const [personinfo, setpersoninfo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const changestatus = () => setIsOpen(!isOpen);
  const closeset = () => setIsOpen(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const storedInfo = localStorage.getItem("personinfo");
    if (storedInfo && storedInfo !== "undefined") {
      setpersoninfo(JSON.parse(storedInfo));
      setissignup(true);
    }
  }, []);

  return (
   
      <div className="min-h-screen flex flex-col bg-white text-black dark:bg-[#01011b] dark:text-white transition-colors duration-300">
        <NavBar
          changestatus={changestatus}
          setissignup={setissignup}
          closeset={closeset}
          personinfo={personinfo}
          setpersoninfo={setpersoninfo}
          issignup={issignup}
          isOpen={isOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {isOpen && (
          <Set
            changestatus={changestatus}
            setissignup={setissignup}
            issignup={issignup}
            personinfo={personinfo}
            setpersoninfo={setpersoninfo}
            closeset={closeset}
            isOpen={isOpen}
          />
        )}

        <Routes>
          <Route path="/" element={<Events issignup={issignup} />} />
          <Route path="/clubs" element={<ClubPage />} />
          <Route path="/clubs/:clubName" element={<ClubDetails />} />
          <Route path="/notification" element={<Notification />} />
          <Route
            path="/signup"
            element={
              <Signup setissignup={setissignup} setpersoninfo={setpersoninfo} />
            }
          />
          <Route
            path="/login"
            element={
              <Login setissignup={setissignup} setpersoninfo={setpersoninfo} />
            }
          />
          <Route path="/individualclubpage" element={<Individualclubpage />} />
          <Route path="/createevent" element={<Createevent />} />
          <Route path="/announce" element={<Announce />} />
        </Routes>

        {/* Footer */}
        <footer className="footer-container border-t border-[#3f3e45] w-full bg-[rgba(1,1,27)] text-white py-10 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <img
              src="https://www.iiti.ac.in/public/themes/iitindore/demos/update-logo.png"
              className="logo h-20 w-20 mx-auto mb-4"
              alt="IIT Indore Logo"
            />
            <p className="font-bold text-xl">
              Indian Institute of Technology Indore, <br /> Khandwa Road,
              Simrol, Indore 453552
            </p>

            <div className="mb-4 space-x-4 text-xl mt-6">
              <a href="#" className="hover:underline font-bold">
                Contact us
              </a>
              <a href="#" className="hover:underline font-bold">
                Help
              </a>
              <a href="#" className="hover:underline font-bold">
                Share
              </a>
            </div>

            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://www.instagram.com/iitindoreofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta}
                  alt="Instagram"
                  className="h-7 w-7 hover:opacity-75"
                />
              </a>
              <a
                href="https://www.linkedin.com/school/iit-indore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedIn}
                  alt="LinkedIn"
                  className="h-7 w-7 hover:opacity-75"
                />
              </a>
              <a
                href="https://x.com/iitiofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter}
                  alt="X"
                  className="h-7 w-7 hover:opacity-75"
                />
              </a>
              <a
                href="https://www.facebook.com/people/IIT-Indore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="h-7 w-7 hover:opacity-75"
                />
              </a>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl text-[#00EAFF] font-bold">Contact us</h2>
              <p className="font-bold">✉️ cse240001068@iiti.ac.in</p>
              <p className="font-bold">✉️ me240003006@iiti.ac.in</p>
              <p className="font-bold">✉️ sse240021015@iiti.ac.in</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-[#00EAFF] font-bold">Share</h2>
              <p className="font-bold">https://campannounce.netlify.app</p>
            </div>
          </div>
        </footer>
      </div>
    
  );
}

export default App;
