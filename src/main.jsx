import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './components/Home.jsx'
import FindPartner from './components/FindPartner.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import MyProfile from './components/MyProfile.jsx'
import CreateProfile from './components/CreateProfile.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import { ToastContainer } from 'react-toastify'
import StudyPartnerDetails from './components/StudyPartnerDetails.jsx'


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
        element:
        <PrivateRoute>
           <FindPartner></FindPartner>
        </PrivateRoute>
      },

      {
        path:'/login',
        Component:Login
      },

      {
        path:"/register",
        Component: Register
      },
      {
        path:'/myProfile',
        element:
        
        <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      },
      {
        path:"/createProfile",
       element:
       <PrivateRoute>
         
          <CreateProfile></CreateProfile>

       </PrivateRoute>
      },

      {
        path:"/details/:id",

        element:
        <PrivateRoute>
         
          <StudyPartnerDetails></StudyPartnerDetails>
          

        </PrivateRoute>
      }
    ]
   }


])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
       <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>,
)
