import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authCheckState } from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Logout from './components/Logout/Logout';

const asyncDogs = asyncComponent(() => {
  return import('./containers/Dogs/Dogs');
});

const asyncParks = asyncComponent(() => {
  return import('./containers/Parks/Parks');
});

const asyncUsers = asyncComponent(() => {
  return import('./containers/UsersSubLayout/UsersSubLayout');
});

class App extends Component {

  componentWillMount() {
    this.props.authCheckState();
  }

  render() {

    const authToken = localStorage.getItem('token')

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        authToken
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
      )} />
    )

    const routes = <Switch>
          <PrivateRoute path="/dogs" component={asyncDogs} />
          <PrivateRoute path="/parks" component={asyncParks} />
          <PrivateRoute path="/users" component={asyncUsers} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>

    return (
        <Layout>
              {routes}
        </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({ authCheckState }, dispatch)
)

export default withRouter(connect(null, mapDispatchToProps)(App));