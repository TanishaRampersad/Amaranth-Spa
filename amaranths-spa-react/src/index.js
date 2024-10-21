import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/Errorpage';
import Home from './components/Home';
import Packages from './components/Packages';
import Specials from './components/Specials';
import Massage from './components/Massage';
import Contact from './components/Contact';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/home',
            element: <Home />,
            errorElement: <ErrorPage />,
          },
        {
          path: '/specials',
          element: <Specials />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/packages',
          element: <Packages />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/massages',
          element: <Massage />,
          errorElement: <ErrorPage />,
        },
        {
            path: '/contact' ,
            element: <Contact />,
            errorElement: <ErrorPage />,
          },
       
      ]
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
