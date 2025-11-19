import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './components/Home.jsx'
import FindPartner from './FindPartner.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'


const router= createBrowserRouter([

   {
    path:"/",
    Component:RootLayout,
    children: [

      {
        index:true,
        Component:Home

      },

      {
        path:"/findPartner",
        Component: FindPartner
      },

      {
        path:'/login',
        Component:Login
      },

      {
        path:"/register",
        Component: Register
      }
    ]
   }


])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
