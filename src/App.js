import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/routes'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <div className="site">
        <Navbar />
        <Header />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}


export default App;
