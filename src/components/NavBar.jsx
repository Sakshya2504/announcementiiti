import { Link } from 'react-router-dom';

import  Search  from './Search-white.png';
import user from './user.png'
import { useLocation } from 'react-router-dom';


export default function NavBar(props) {
  const navigation = [
  { name: 'Clubs', path: '/clubs' },
  { name: 'Events', path: '/' },
 
  { name: 'Notification', path: '/notification' },
   ...(!props.issignup?[{ name: 'Signup', path: '/signup'}]:[] )
];
const location=useLocation();

  return (
    <header className="bg-[rgba(1,1,27,0.6)]  sticky top-0 z-50 shadow-md">
      <div className="max-w-[99%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          <div className='flex items-center '>
          <a href="https://www.iiti.ac.in">
            <img
              src="https://www.iiti.ac.in/public/themes/iitindore/demos/update-logo.png"
              className="logo h-15 w-15 p-0 lg:h-20 lg:w-20"
              alt="IIT Indore Logo"
            />
          </a>
          <p className='text-white font-bold text-xl p-1 '>IIT INDORE</p>
          </div>

              
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
    <img src={Search} alt="Search" className="h-6 w-6 cursor-pointer" />
  </button>
</div>
{props.issignup&&
<div className='hidden md:block'>
  <img src={user} alt="user" className='w-11 h-11 cursor-pointer' />
</div>
}
          
          {/* Mobile Menu Button */}
         <div className="md:hidden">
  <button
    onClick={props.changestatus}
    className="text-white text-3xl cursor-pointer focus:outline-none"
  >
    {props.isOpen ? '✖' : '☰' }
  </button>
</div>

      
          
        </div>
      </div>
      
    </header>
  );
}
