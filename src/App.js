import React, { Component } from 'react';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import PrivateOnlyRoute from './Utils/PrivateRoute';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/LogIn/Login';
import PostsList from './Components/PostsList/PostsList';
import NewPostForm from './Components/NewPostForm/NewPostForm';
import NewMessageForm from './Components/NewMessageForm/NewMessageForm';
import MessagesList from './Components/MessagesList/MessagesList';
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
          <PrivateOnlyRoute path="/posts" component={PostsList} />
          <PrivateOnlyRoute path="/new-message" component={NewMessageForm} />
          <PrivateOnlyRoute path="/messages" component={MessagesList} />
        </Switch>
      </div>
    );
  }
}

export default App;
