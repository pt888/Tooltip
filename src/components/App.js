import React, { Component } from 'react';
import Popup from "reactjs-popup";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import index from "./../index";



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selectValue:""
    };
this.handleDropdownChange=this.handleDropdownChange.bind(this);
}
handleDropdownChange(e){
    this.setState({selectValue:e.target.value});
}
  render(){
  return(
  <div className="container">
    <div className="link">
      <a href="https://github.com/pt888/Tooltip">Github Link</a>
    </div>
    <div className="column">
      <select id="dropdown"
      onChange={this.handleDropdownChange}
      >
          <option>Choose the Position</option>
          <option value="top">Top</option>
          <option value="right">Right</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
       </select>
    </div>

    <Popup 
      trigger={<button className="button"> Download</button>}
      position={this.state.selectValue}
      on="hover"
      >
      <Card position={this.state.selectValue} />
    </Popup>
    
  </div>
  );
}
}

export default App;
