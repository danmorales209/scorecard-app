import { hot } from 'react-hot-loader/root';
import React, { Component} from "react";
import Login from './views/login';
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Login message="oh look" />
      </div>
      
    );
  }
}

export default hot(App);