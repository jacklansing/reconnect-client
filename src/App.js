import React, { Component } from 'react';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import PrivateOnlyRoute from './Utils/PrivateRoute';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/LogIn/Login';
import NewPostForm from './Components/NewPostForm/NewPostForm';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    console.log('App rendered');
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <PublicOnlyRoute path="/sign-up" component={SignUp} />
          <PublicOnlyRoute path="/login" component={Login} />
          <PrivateOnlyRoute path="/new-post" component={NewPostForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
