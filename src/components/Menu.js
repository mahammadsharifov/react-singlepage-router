import React from 'react';
import { Link } from 'react-router-dom';
 
class Menu extends React.Component{

  render(){
    return(
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/works"><li>Works</li></Link>
          <Link to="/about"><li>About</li></Link>
        </ul> 
      </nav>
    )
  }
}
 
export default Menu;