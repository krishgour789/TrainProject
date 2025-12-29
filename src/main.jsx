import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// // import App from './Component/Layout'
// import App from './Component/Home.jsx'
import App from './Component/TrainBookingApp'
// import App from './Component/Book.jsx'
// import App from './Component/Routes'
// import App from './Component/Loginpage'
// import App from './Component/Register'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
