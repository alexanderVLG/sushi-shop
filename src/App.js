import React, {Component} from 'react';
import Header from './common/components/Header';
import Layout from './common/components/Layout';
import Footer from "./common/components/Footer";

class App extends Component {
  render () {
    return (
      <>
        <Header />
        <Layout />
        <Footer />
      </>
    )
  }
}

export default App;