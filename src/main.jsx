import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Basic from './Basic';
import Home from './Home';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic></Basic>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-lg mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
