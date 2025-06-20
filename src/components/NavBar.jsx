import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import  Search  from './Search.png';
const navigation = [
  { name: 'Clubs', path: '/clubs' },
  { name: 'Events', path: '/' },
 
  { name: 'Notification', path: '/notification' },
   { name: 'Signup', path: '/signup' },
];

export default function NavBar() {
  const location = useLocation();
const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[rgba(1,1,27,0.6)]  sticky top-0 z-50 shadow-md">
      <div className="max-w-[99%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          <a href="https://www.iiti.ac.in">
            <img
              src="https://www.iiti.ac.in/public/themes/iitindore/demos/update-logo.png"
              className="logo h-20 w-20"
              alt="IIT Indore Logo"
            />
          </a>

              
          <nav className="hidden md:flex space-x-15 p-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xl ${
                  location.pathname === item.path
                    ? 'text-white font-bold'
                    : 'text-white  font-bold hover:text-blue-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

       <form
  className="hidden md:flex items-center gap-2"
  onSubmit={(e) => e.preventDefault()}
>
  <input
    type="search"
    placeholder="Search here"
    className="px-3 py-1 rounded-md bg-white text-black border border-black focus:outline-none w-64"
  />
  <button
    type="submit"
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
    <img src={Search} alt="Search" className="h-6 w-6" />
  </button>
</div>

          
          {/* Mobile Menu Button */}
         <div className="md:hidden">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-black text-3xl focus:outline-none"
  >
    {isOpen ? '✖' : '☰'}
  </button>
</div>

      {/* Mobile Dropdown */}
              {isOpen && (
          <div className="md:hidden bg-gray-900 mt-2 rounded-md px-4 py-2">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)} // close menu after click
                className={`block py-2 text-base ${
                  location.pathname === item.path
                    ? 'text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}

        </div>
      )}
          
        </div>
      </div>
      
    </header>
  );
}
