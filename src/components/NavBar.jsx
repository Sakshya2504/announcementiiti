import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Clubs', path: '/clubs' },
  { name: 'Events', path: '/' },
  { name: 'Announcement', path: '/announcement' },
  { name: 'Registration', path: '/registration' },
  { name: 'Notification', path: '/notification' },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <header className="bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          <a href="https://www.iiti.ac.in">
            <img
              src="https://www.iiti.ac.in/public/themes/iitindore/demos/update-logo.png"
              className="logo h-30 w-30"
              alt="IIT Indore Logo"
            />
          </a>

          <nav className="hidden md:flex space-x-10 p-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xl ${
                  location.pathname === item.path
                    ? 'text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <form className="hidden md:flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search here"
              className="px-3 py-1 rounded-md bg-white text-black border border-gray-300 focus:outline-none w-64"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 rounded-md transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
