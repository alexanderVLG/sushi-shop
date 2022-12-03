import React, {Component} from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from "./components/Footer";

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