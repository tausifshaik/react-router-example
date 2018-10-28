import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Reports from './components/Reports';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component = {Home} exact />
            <Route path="/About" component = {About} />
            <Route path="/Contact" component = {Contact} />
            <Route path="/Reports" component = {Reports} />
            <Route component = {Error} />
          </Switch>  
        </div>
                  
      </BrowserRouter>
    );
  }
}

export default App;
