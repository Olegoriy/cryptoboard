import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive
      ? 'gradient-text bg-gray-800'
      : 'text-gray-300 hover:gradient-text-hover hover:bg-gray-700'
  }`;

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl font-bold gradient-text transition-colors whitespace-nowrap"
          >
            CryptoDash
          </Link>

          <nav className="flex items-center space-x-4">
            <NavLink to="/dashboard" className={navLinkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/favorites" className={navLinkClass}>
              Favorites
            </NavLink>
            <NavLink to="/settings" className={navLinkClass}>
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