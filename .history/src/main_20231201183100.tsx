import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world! welcome to my website</div>,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/signin',
    element: <div>Signin</div>,
  },
  {
    path: '/score',
    element: <div>Score</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
