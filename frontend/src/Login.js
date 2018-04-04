import React, { Component } from "react";
import $ from 'jquery'
import Cookies from 'js-cookie'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username : '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    console.log(this.state.username);
    console.log(this.state.password);
     $.ajax({
      type : 'POST',
      url : '/login',
      data : {username : this.state.username,
              password : this.state.password},
      datatype : 'json',
      success: function(data){
        sessionStorage.setItem('status','loggedIn');
        window.location.replace("/") ;
      }.bind(this)
    })
    sessionStorage.setItem('status','loggedIn');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>
          Enter Username:
          <input type="text" onChange={this.handleChange} />
        </label>
        <label>
          Enter password:
          <input type="password"  onChange={this.handleChange} />
        </label>
         <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

