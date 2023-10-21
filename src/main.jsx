import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import App from './App.jsx'
import Registration from './components/Registration/Registration.jsx'
import Login from './components/Login/Login.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/courses' element={<App />} />
        <Route path='registration' element={<Registration />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
