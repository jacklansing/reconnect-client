import React from 'react';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
// import PrivateOnlyRoute from './Utils/PrivateRoute';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/LogIn/Login';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <PublicOnlyRoute path="/signup" component={SignUp} />
        <PublicOnlyRoute path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
