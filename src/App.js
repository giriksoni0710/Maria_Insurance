import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer'
import MiniDrawer from './Components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

    <div className="App">
      
    <MiniDrawer>

    </MiniDrawer>
    
    <Footer>

    </Footer>

    </div>
   
  );
}

export default App;
