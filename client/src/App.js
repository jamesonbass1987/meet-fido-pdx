import React, { Component } from 'react';
import Layout from './hoc/Layout';

class App extends Component {
  render() {
    return (
      <div >
      <Layout>
          <header>
            <h1>Welcome to React</h1>
          </header>
      </Layout>
      </div>
    );
  }
}

export default App;
