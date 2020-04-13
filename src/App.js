import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/LogIn/Login';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
