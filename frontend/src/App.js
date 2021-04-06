import React from 'react'
import RegisterForm from './components/RegisterForm/RegisterForm'
import UserState from './components/UserState/UserState';
const App = () => {
  return (
    <React.Fragment>
      <UserState>
      <RegisterForm/>
      </UserState>
    </React.Fragment>
  );
};

export default App;
