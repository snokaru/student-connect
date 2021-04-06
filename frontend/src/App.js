import React from 'react'
import RegisterForm from './components/RegisterForm/RegisterForm';
import UserState from './components/UserState/UserState';
import Home from './components/Pages/Home';
import NavBar from './components/Layout/Navbar/Navbar';
import User from './components/Pages/User';
const App = () => {
  return (
    <React.Fragment>
      <UserState>
      <NavBar></NavBar>
      <User></User>
      </UserState>
    </React.Fragment>
  );
};

export default App;
