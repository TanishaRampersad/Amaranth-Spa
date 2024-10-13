import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/Errorpage';


const Router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/home',
          //   element: <home />,
            errorElement: <ErrorPage />,
          },
        {
          path: '/specials',
        //   element: <specials />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/packages',
        //   element: <packages />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/massages',
        //   element: <massages />,
          errorElement: <ErrorPage />,
        },
        {
            path: '/contact' ,
            // element: <contact />,
            errorElement: <ErrorPage />,
          },
       
      ]
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={Router} />
);
