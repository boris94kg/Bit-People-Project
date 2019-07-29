import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Footer } from './partials/Footer.js';
import About from './pages/About.js';
import UserPage from './pages/UserPage.js';

import '../App.css';

class App extends React.Component {

  render() {
    return (
      < div className="App" >
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/" component={UserPage} />
        </Switch>
        <Footer />
      </div >
    );
  }

}

export default App;
