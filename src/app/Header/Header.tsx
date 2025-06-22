import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors whitespace-nowrap"
          >
            CryptoDash
          </Link>

          <nav className="flex items-center space-x-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-green-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-green-300 hover:bg-gray-700'
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-green-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-green-300 hover:bg-gray-700'
                }`
              }
            >
              Favorites
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-green-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-green-300 hover:bg-gray-700'
                }`
              }
            >
              Settings
            </NavLink>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;