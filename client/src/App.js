import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import { fetchCurrentUser, authCheckState } from './store/actions/index'

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
  return import('./containers/UsersRouter/UsersRouter');
});

class App extends Component {

  componentWillMount() {
    this.props.authCheckState();
    this.props.fetchCurrentUser();
  }

  componentWillUpdate(){
    const token = localStorage.getItem('token')

    if(token && !this.props.currentUser){
      this.props.fetchCurrentUser();
    }
  }

  render() {
    const userToken = localStorage.getItem('token')

    
    let routes = (<Switch>
                    <Route path="/" exact component={Home} />
                    <Redirect to="/" />
                  </Switch>)

    if (userToken){

      routes = <Switch>
                <Route path="/dogs" component={asyncDogs} />
                <Route path="/parks" component={asyncParks} />
                <Route path="/users" component={asyncUsers} />
                <Route path="/logout" component={Logout} />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
              </Switch>
    }

    return (
        <Layout>
          {routes}
        </Layout>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({ authCheckState, fetchCurrentUser }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));