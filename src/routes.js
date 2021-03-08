import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';


const Routes = () => {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={About} />
        {/* <Route path="*" component={Error} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;