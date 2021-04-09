import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/routes'
import './App.css'
import Navbar from './components/Navbar'


function App() {
 
  const [userId, setUserId] = useState("606e3e5cb31f375c7dbeb0c2")

  return (
    <div className="App">
        <Navbar />
        <Header />
        <Routes setUserId = { setUserId } userId= { userId } />
        <Footer />
    </div>
  );
}


export default App;
