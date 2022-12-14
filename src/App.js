import {Component} from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import SharedLayout from './pages/SharedLayout'




class App extends Component {
  render () {
    return (
      
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Menu />} />
          </Route>          
        </Routes>
      
    )
  }
}

export default App;