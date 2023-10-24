import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App.jsx'
import Registration from './components/Registration/Registration.jsx'
import Login from './components/Login/Login.jsx'

import { store } from './store/index.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='registration' element={<Registration />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
