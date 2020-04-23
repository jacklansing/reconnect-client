import React, { Component } from 'react';
import PublicOnlyRoute from './Components/Utils/PublicOnlyRoute';
import PrivateOnlyRoute from './Components/Utils/PrivateRoute';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import AuthLanding from './Components/AuthLanding/AuthLanding';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/LogIn/Login';
import PostsList from './Components/PostsList/PostsList';
import NewPostForm from './Components/NewPostForm/NewPostForm';
import NewMessageForm from './Components/NewMessageForm/NewMessageForm';
import MessagesList from './Components/MessagesList/MessagesList';
import MessagesChat from './Components/MessagesChat/MessagesChat';
import PostListPersonal from './Components/PostsList-Personal/PostsList-Personal';
import EditPostForm from './Components/EditPostForm/EditPostForm';
import PageNotFound from './Components/Utils/PageNotFound/PageNotFound';
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
    if (TokenService.hasAuthToken()) {
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
          <Route
            exact
            path="/"
            component={() =>
              this.state.hasAuth ? <AuthLanding /> : <Landing />
            }
          />
          <PublicOnlyRoute
            path="/sign-up"
            component={() => <SignUp setAuthStatus={this.setAuthStatus} />}
          />
          <PublicOnlyRoute
            path="/login"
            component={() => <Login setAuthStatus={this.setAuthStatus} />}
          />
          <PrivateOnlyRoute path="/new-post" component={NewPostForm} />
          <PrivateOnlyRoute path="/posts" component={PostsList} />
          <PrivateOnlyRoute path="/my-posts" component={PostListPersonal} />
          <PrivateOnlyRoute path="/new-message" component={NewMessageForm} />
          <PrivateOnlyRoute exact path="/messages" component={MessagesList} />
          <PrivateOnlyRoute path="/messages/chat" component={MessagesChat} />
          <PrivateOnlyRoute path="/edit-post" component={EditPostForm} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
