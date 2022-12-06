import { Component } from "react";
import {Link} from 'react-router-dom';

class Catalog extends Component {
  render() {
    return(
      <>
        <h2>Catalog</h2>
        <Link to="/">back home</Link>
      </>
    );
  }
}
export default Catalog;
