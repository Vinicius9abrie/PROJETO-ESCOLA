import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Pages/HomePage/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './components/Pages/Login/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter([
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      }
    ])}
    />
  </StrictMode>,
)
