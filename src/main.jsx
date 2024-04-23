import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import ColorPicker from './components/ColorPicker.jsx'
import GradientPicker from './components/GadientPicker.jsx'


const router = createBrowserRouter([
  {
  path: "",
  element: <App />,
  children:[
    {
      path: '',
      element:<Homepage/>
    },
    {
      path:'color-picker',
      element: <ColorPicker/>
    },
    {
      path: 'gradient-picker',
      element: <GradientPicker/>
    }
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
