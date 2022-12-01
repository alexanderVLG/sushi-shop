import React, {Component} from 'react';
import Header from './components/Header';
import Layout from './components/Layout';

class App extends Component {
  render () {
    return (
      <>
        <Header />
        <Layout />
      </>
    )
  }
}

export default App;