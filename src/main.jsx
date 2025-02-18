import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
//import StoreContextProvider, { StoreContext } from './context/Storecontext.jsx'
import StoreContextProvider from './Context/StoreContext.jsx'
//import { StoreContext } from './Context/StoreContext.js'




ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
    
    <App />
    
  </StoreContextProvider>
  </BrowserRouter>
)