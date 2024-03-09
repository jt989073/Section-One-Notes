import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PhotoUpload from './PhotoUpload.jsx'
import './index.css'
import PhotoList from './PhotoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhotoUpload />
    <PhotoList />
  </React.StrictMode>,
)
