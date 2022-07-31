import React from 'react';
import Container from './components/container/Container';
import Index from './components/login/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/home" component={Container} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
