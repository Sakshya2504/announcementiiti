import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
function Set(props) {
     const location = useLocation();
     const navigate=useNavigate();
  const navigation = [
  { name: '🧑‍🤝‍🧑 Clubs', path: '/clubs' },
  { name: '📅 Events', path: '/' },
 
  { name: '🔔 Notification', path: '/notification' },
  ...(!props.issignup?[{ name: ' ✍️ Signup', path: '/signup'}]:[] )
];
  return (
    <>
     {/* Mobile Dropdown */}
               (
          <div className="dropdown md:hidden w-[50%] fixed top-[120px] z-50 bg-black h-[100vh]  ">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={props.closeset} // close menu after click
                className={`block py-2 px-4 text-base ${
                  location.pathname === item.path
                    ? ' text-blue-500 font-bold'
                    : 'text-white  hover:text-blue-500 font-bold'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {props.issignup&&
            <div className=''>
            <div className='profile text-white font-bold pl-[15px] mb-[15px] mt-[6px] '>{`🙍 ${props.personinfo.name}`}</div>
            <div className='logout text-red-500 font-bold cursor-pointer pl-[17px] mb-[10px] hover:opacity-75' onClick={() => {
           if(window.confirm('Do you want to logout?')){
             localStorage.removeItem('personinfo');
            props.setissignup(false);
            props.setpersoninfo(null);
            navigate('/signup') ;
           }
            }}>🔓 Logout</div>
            </div>
            }

        </div>
      )
      </>
  )
}

export default Set