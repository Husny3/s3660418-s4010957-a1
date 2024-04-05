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


function App() {
  const [username, setUsername] = useState();

  const loginUser = (username) => {
    setUsername(username);
  }

  const logoutUser = () => {
  ;
    setUsername(null);
  }

return (
<div>
<Router>
<Navbar username={username} logoutUser={logoutUser} />

      <Routes>
        <Route path="/Home" element={<Home username={username} />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/Profile" element={<Profile username={username}/>} />
        <Route path="/Specials" element={<Specials/>} />
        <Route path="/Form" element={<Form/>} />
        

      </Routes>

    <Main />
    <Footer />
    </Router>
</div>
  );
}

export default App;
