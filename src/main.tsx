import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './routes/Register.tsx'
import App from './App.tsx'
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
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
