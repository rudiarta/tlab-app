import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { appRoutes } from '../config/appRoutes'

class App extends Component {
  render(){
    return (
    <Router>
      <Switch>
      {appRoutes.map((data,i) => (
          <Route key={i} path={data.path} exact={data.exact} component={data.component} />
        ))}
      </Switch>
    </Router>
    )
  }
}

export default App;
