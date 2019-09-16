// Single Page Application using 'react-router'

import React, {Component} from 'react';
import Menu from './components/Menu';
import Content from './components/Content';
import './style.scss';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: ""
    };
    this.list = ['darkslategray', 'dimgray', 'rebeccapurple'];
  }

  componentDidMount(){
    // getting random element from the array
    this.setState({ color: this.list[Math.floor(Math.random()*this.list.length)] });
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <div className="leftcol">
          <h1>JOHN <span>DOE</span></h1>
          <p>/ Web developer / Designer /</p>
          <Menu />
        </div>
        <div className="rightcol">
          <div>
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default App;