import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import R from "./components/redux"
import Store from "./components/store"

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/redux" component={R} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;