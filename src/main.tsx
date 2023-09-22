import 'vite/modulepreload-polyfill'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './routes/Register.tsx'
import Validator from './routes/Validator.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page!</div>
  },
  {
    path: "/login",
    element: <div>Login Page!</div>
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/validate/:token",
    element: <Validator />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
