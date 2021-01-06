import { hot } from 'react-hot-loader/root';
import React, { Component} from "react";
import Login from './views/login';
import "./App.css";

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email:null,
        password:null
      }
    };
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(userHash) {
    const {email, password } = userHash;
    this.setState( () => {
      return {
        user: {email, password}
      };
    });
  }

  render(){
    return(
      <div className="App">
        <Login 
          message="oh look"
          saveUser={this.updateUser}   
        />
        <div>
          <p>{this.state.user.email}</p>
          <p>{this.state.user.password}</p>
        </div>
      </div>
      
    );
  }
}

export default hot(App);