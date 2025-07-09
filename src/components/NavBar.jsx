import { Link } from "react-router-dom";

<<<<<<< HEAD
import Search from "./Images/Search.png";
import user from "./Images/user.png";
=======
import Search from '../Images/Search-white.png';
import user from './user.png'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
>>>>>>> 90b235715ac9baa93ea75837b7dfe3cdff0d84c5

import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
export default function NavBar(props) {
  const navigate = useNavigate();
  //  const [darkMode, setDarkMode] = useState(false);
  const [isuserinfoopen, setisuserinfoopen] = useState(false);
  const navigation = [
    { name: "Clubs", path: "/clubs" },
    { name: "Events", path: "/" },

    { name: "Notification", path: "/notification" },
    ...(!props.issignup ? [{ name: "Signup", path: "/signup" }] : []),
  ];

  // This   component allows users to log in to their account
  // It includes a form where users can input their email and password
  const location = useLocation();
  const [Searchinfo, setSearchinfo] = useState({
    Search: "",
  });
=======
export default function NavBar({ searchQuery, setSearchQuery, ...props }) {
  const navigate = useNavigate();
  const [isuserinfoopen, setisuserinfoopen] = useState(false);
  const navigation = [
    { name: 'Clubs', path: '/clubs' },
    { name: 'Events', path: '/' },

    { name: 'Notification', path: '/notification' },
    ...(!props.issignup ? [{ name: 'Signup', path: '/signup' }] : [])
  ];
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault(); // optional since input is live
  };
>>>>>>> 90b235715ac9baa93ea75837b7dfe3cdff0d84c5

  return (
    <header className="bg-[rgba(1,1,27,0.6)]  sticky top-0 z-50 shadow-md">
      <div className="max-w-[99%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={props.changestatus}
              className="text-white text-3xl cursor-pointer focus:outline-none"
            >
<<<<<<< HEAD
  { props.isOpen ? "✖" : "☰" }
            </button >
          </div >
    <div className="flex items-center ">
=======
              {props.isOpen ? '✖' : '☰'}
    </button>
          </div >
    <div className='flex items-center '>
>>>>>>> 90b235715ac9baa93ea75837b7dfe3cdff0d84c5
      <a href="https://www.iiti.ac.in">
        <img
          src="https://www.iiti.ac.in/public/themes/iitindore/demos/update-logo.png"
          className="logo h-15 w-15 p-0 lg:h-20 lg:w-20"
          alt="IIT Indore Logo"
        />
      </a>
<<<<<<< HEAD
  <p className="text-white font-bold text-xl p-1 ">IIT INDORE</p>
          </div >

=======
            <p className='text-white font-bold text-xl p-1 '>IIT INDORE</p>
          </div>


>>>>>>> 90b235715ac9baa93ea75837b7dfe3cdff0d84c5
          <nav className="hidden md:flex space-x-15 p-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
<<<<<<< HEAD
                className={`text-xl ${
                  location.pathname === item.path
                    ? "text-white font-bold"
                    : "text-white  font-bold hover:text-blue-500"
                }`}
=======
                className={`text-xl ${location.pathname === item.path
                    ? 'text-white font-bold'
                    : 'text-white  font-bold hover:text-blue-500'
                  }`}
>>>>>>> 90b235715ac9baa93ea75837b7dfe3cdff0d84c5
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <form
            className="hidden md:flex items-center gap-2"
<<<<<<< HEAD
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="search"
              placeholder="Search here"
=======
            onSubmit={handleSearch}
          >
            <input
              type="search"
              placeholder="Search by club name or event name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
>>>>>>> 90b235715ac9baa93ea75837b7dfe3cdff0d84c5
              className="px-3 py-1 rounded-md bg-white text-black border border-black focus:outline-none w-64"
            />
            <button
              type="submit"
<<<<<<< HEAD
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 cursor-pointer rounded-md transition"
            >
              <img src={Search} alt="Search" className="h-5 w-5" />
            </button>
          </form>
  {/* dark  mode toggle*/ }
  {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="border px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-white text-sm"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button> */}

  {/* Mobile Search Icon */ }
  <div className="md:hidden">
    <button
      onClick={() => setSearchinfo(Searchinfo)}
      className="text-white"
    >
      <img
        src={Search}
        alt="Search"
        className="h-6 w-6 cursor-pointer"
      />
    </button>
  </div>

  {
    props.issignup && (
      <div
        className="hidden md:block"
        onClick={() => setisuserinfoopen(!isuserinfoopen)}
      >
        <img
          src={user}
          alt="user"
          className="w-11 h-11 cursor-pointer hover:h-12 hover:w-12 hover:opacity-75"
        />
      </div>
    )
  }
  {
    isuserinfoopen && (
      <div className="w-80 hidden md:block absolute border border-radius-2 top-32 right-3 z-100 bg-white rounded-md ">
        <div className="flex flex-col items-center my-5 mx-5 border rounded bg-gray-300">
          <img src={user} alt="user" className="w-15 h-15 my-2 " />
          <h2 className="font-bold py-1">
            {props.personinfo?.name || "No name"}
          </h2>
          <h2>{props.personinfo?.email || "No email "}</h2>
        </div>
        <button
          className="logout text-red-500 font-bold cursor-pointer pl-[17px] mb-[10px] hover:opacity-75"
          onClick={() => {
            if (window.confirm("Do you want to logout?")) {
              localStorage.removeItem("personinfo");
              props.setissignup(false);
              props.setpersoninfo(null);
              setisuserinfoopen(false);
              navigate("/signup");
            }
          }}
        >
          🔓 Logout
        </button>
      </div>
    )
  }
        </div >
      </div >
=======
              
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 cursor-pointer rounded-md transition"

            ><img src={Search} alt="Search" className="h-5 w-5" />
            </button>

          </form>

          {/* Mobile Search Icon */}
          <div className="md:hidden">
            <button
              onClick={() => alert("Mobile search coming soon!")}
              className="text-white"
            >
              <img src={Search} alt="Search" className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
          {props.issignup &&
            <div className='hidden md:block' onClick={() => setisuserinfoopen(!isuserinfoopen)}>
              <img src={user} alt="user" className='w-11 h-11 cursor-pointer hover:h-12 hover:w-12 hover:opacity-75' />
            </div>
          }
          {isuserinfoopen && (
            <div className='w-80 hidden md:block absolute border border-radius-2 top-32 right-3 z-100 bg-white rounded-md '>
              <div className='flex flex-col items-center my-5 mx-5 border rounded bg-gray-300' >
                <img src={user} alt="user" className='w-15 h-15 my-2 ' />
                <h2 className='font-bold py-1'>{props.personinfo?.name || 'No name'}</h2>
                <h2>{props.personinfo?.email || 'No email '}</h2>
              </div>
              <button className='logout text-red-500 font-bold cursor-pointer pl-[17px] mb-[10px] hover:opacity-75' onClick={() => {
                if (window.confirm('Do you want to logout?')) {
                  localStorage.removeItem('personinfo');
                  props.setissignup(false);
                  props.setpersoninfo(null);
                  setisuserinfoopen(false);
                  navigate('/signup');
                }
              }}>🔓 Logout
              </button>
            </div>
          )}





        </div>
      </div>

>>>>>>> 90b235715ac9baa93ea75837b7dfe3cdff0d84c5
    </header >
  );
}
