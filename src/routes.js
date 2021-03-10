import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

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


const Routes = () => {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/edit" component={EditPost} />
        <Route exact path="/create" component={NewPost} />
        <Route exact path="/post" component={Post} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;