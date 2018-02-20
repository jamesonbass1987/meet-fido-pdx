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

    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    )

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/parks" component={Parks} />
          <Route path="/users" component={Users} />
          <Route path ="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>

      )

    }

    return (
        <Layout>
              {routes}
        </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ authCheckState }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));