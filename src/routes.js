import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Post from './pages/Post';
import EditPost from './pages/EditPost';
import NewPost from './pages/NewPost';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
        <Redirect to={"/login"} />
      )
  }
  />
);

const Routes = () => {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/edit/:id" component={EditPost} />
        <PrivateRoute exact path="/create" component={NewPost} />
        <Route exact path="/post/:id" component={Post} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;