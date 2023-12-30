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
import Register from './Register';
import Authprovider from './Authprovider';
import DashBoard from './DashBoard';
import None from './None';
import AddTask from './AddTask';
import PreviousTask from './PreviousTask';

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
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      // {
      //   path: "/dashBoard",
      //   element: <DashBoard></DashBoard>
      // },
      // {
      //   path: "/addTask",
      //   element: <AddTask></AddTask>
      // }
     
    ]
  },
  {
    path : "dashBoard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "addTask",
        element: <AddTask></AddTask>
      },
      {
        path: "preTask",
        element: <PreviousTask></PreviousTask>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-lg mx-auto'>
      <Authprovider>
      <RouterProvider router={router} />
      </Authprovider>
    </div>
  </React.StrictMode>,
)
