import {Component} from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import SharedLayout from './pages/SharedLayout'




class App extends Component {
  render () {
    return (
      
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
          </Route>          
        </Routes>
      
    )
  }
}

export default App;