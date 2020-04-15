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
import MessagesChat from './Components/MessagesChat/MessagesChat';
import { Route, Switch } from 'react-router-dom';
import TokenService from './services/token-service';

class App extends Component {
  state = {
    hasAuth: false
  };

  setAuthStatus = bool => {
    this.setState({
      hasAuth: bool
    });
  };

  componentDidMount() {
    if (TokenService.hasAuthToken) {
      this.setAuthStatus(true);
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar
          authStatus={this.state.hasAuth}
          setAuthStatus={this.setAuthStatus}
        />
        <Switch>
          <Route exact path="/" component={Landing} />
          <PublicOnlyRoute path="/sign-up" component={SignUp} />
          <PublicOnlyRoute
            path="/login"
            component={() => <Login setAuthStatus={this.setAuthStatus} />}
          />
          <PrivateOnlyRoute path="/new-post" component={NewPostForm} />
          <PrivateOnlyRoute path="/posts" component={PostsList} />
          <PrivateOnlyRoute path="/new-message" component={NewMessageForm} />
          <PrivateOnlyRoute exact path="/messages" component={MessagesList} />
          <PrivateOnlyRoute path="/messages/chat" component={MessagesChat} />
        </Switch>
      </div>
    );
  }
}

export default App;
