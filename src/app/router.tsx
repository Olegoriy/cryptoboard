import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import MainDashboard from '../pages/MainDashboard';
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
]);

export default router;