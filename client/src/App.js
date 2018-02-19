import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Dogs from './containers/Dogs/Dogs';
import Parks from './containers/Parks/Parks';
import Users from './containers/Users/Users';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dogs" component={Dogs} />
        <Route path="/parks" component={Parks} />
        <Route path="/users" component={Users} />
        <Redirect to="/" />
      </Switch>
    )

    return (
        <Layout>
              {routes}
        </Layout>
    );
  }
}

export default App;
