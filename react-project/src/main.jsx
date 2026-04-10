import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Welcome from './components/Welcome.jsx'
// import Student from './components/Student.jsx'
//import Counter from './components/counter.jsx'
//import NameInput from './components/NameInput.jsx'
//import CounterApp from './components/CounterApp.jsx'
import Subscription from './components/Subscription.jsx'
import RepotCard from './components/ReportCard.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />

    <Welcome name='Utsav Singh'/>
    <Welcome name='Vishal Singh'/>
    
    <Student name='utsav singh' cource='Btech' Rollno='6'/> */}
    {/* <Counter />
    <NameInput />
    <CounterApp />
     
    <Subscription />  
    */}
    <RepotCard />
  </StrictMode>,
)
