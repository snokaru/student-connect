import React from 'react'
import RegisterForm from './components/RegisterForm/RegisterForm';
import UserState from './components/UserState/UserState';
import Home from './components/Pages/Home';
const App = () => {
  return (
    <React.Fragment>
      <UserState>
      <Home/>
      <RegisterForm/>
      </UserState>
    </React.Fragment>
  );
};

export default App;
