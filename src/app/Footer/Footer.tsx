import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Лого и описание */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-green-400">
              CryptoDash
            </Link>
            <p className="text-gray-400">
              Ваш надежный источник информации о криптовалютах и рыночных тенденциях.
            </p>
          </div>

          {/* Навигация */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Навигация</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/dashboard" className="text-gray-300 hover:text-green-300 transition-colors">
                Dashboard
              </Link>
              <Link to="/favorites" className="text-gray-300 hover:text-green-300 transition-colors">
                Favorites
              </Link>
              <Link to="/settings" className="text-gray-300 hover:text-green-300 transition-colors">
                Settings
              </Link>
            </nav>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Контакты</h3>
            <div className="flex flex-col space-y-2 text-gray-300">
              <a href="mailto:info@cryptodash.com" className="hover:text-green-300 transition-colors">
                info@cryptodash.com
              </a>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="hover:text-green-300 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="hover:text-green-300 transition-colors">
                  <span className="sr-only">Telegram</span>
                  <i className="fab fa-telegram text-xl"></i>
                </a>
                <a href="#" className="hover:text-green-300 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CryptoDash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;