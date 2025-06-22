import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import MainDashboard from '../pages/MainDashboard';
import Favorites from '../pages/Favorites';
import Settings from '../pages/Settings';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
    ],
  },
    {
    path: '/dashboard',
    element: <App />,
    children: [
      { index: true, element: <MainDashboard /> },
    ],
  },
  {
    path: '/favorites',
    element: <App />,
    children: [
      {index: true, element: <Favorites />}
    ],
  },
  {
    path: '/settings',
    element: <App />,
    children: [
      {index: true, element: <Settings />}
    ],
  },
]);

export default router;