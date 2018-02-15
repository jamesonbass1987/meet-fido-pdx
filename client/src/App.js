import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import Layout from './hoc/Layout';
import Home from './containers/Home/Home';
import Dog from './containers/Dog/Dog';
import Park from './containers/Park/Park';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dogs" component={Dog} />
        <Route path="/parks" component={Park} />
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
