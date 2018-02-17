import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import Layout from './hoc/Layout';
import Home from './containers/Home/Home';
import Dogs from './containers/Dogs/Dogs';
import Parks from './containers/Parks/Parks';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dogs" component={Dogs} />
        <Route path="/parks" component={Parks} />
        <Redirect to="/" />
      </Switch>
    )

    return (
      <div >
      <Layout>
          <header>
            {routes}
          </header>
      </Layout>
      </div>
    );
  }
}

export default App;
