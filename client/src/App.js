import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authCheckState } from './store/actions/index';


import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Dogs from './containers/Dogs/Dogs';
import Parks from './containers/Parks/Parks';
import Users from './containers/Users/Users';
import Logout from './components/Logout/Logout';

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
          <PrivateRoute path="/dogs" component={Dogs} />
          <PrivateRoute path="/parks" component={Parks} />
          <PrivateRoute path="/users" component={Users} />
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