import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/routes'
import './App.css'
import Navbar from './components/Navbar'


function App() {
 
  const [userId, setUserId] = useState(null)

  return (
    <div className="App">
        <Navbar />
        <Header />
        <Routes setUserId = { setUserId } />
        <Footer />
    </div>
  );
}


export default App;
