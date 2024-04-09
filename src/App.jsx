import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Specials from './pages/Specials'; 
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Home from './pages/Home';
import Form from "./pages/Form";
import Tips from "./pages/Tips";
import { getUser, removeUser } from './data/repository'


function App() {
  const [username, setUsername] = useState(getUser());

  const loginUser = (username) => {
    setUsername(username);
  }

  const logoutUser = () => {
    removeUser();
    setUsername(null);
  }

return (
<div>
<Router>
<Navbar username={username} logoutUser={logoutUser} />

      <Routes>
        <Route path="/" element={<Home username={username} />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/Profile" element={<Profile username={username}/>} />
        <Route path="/Specials" element={<Specials/>} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/tips" element={<Tips/>} />
        

      </Routes>

    
    <Footer />
    </Router>
</div>
  );
}

export default App;
