import React, { Component } from 'react';
import $ from 'jquery'
var createReactClass = require('create-react-class')
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
var App = createReactClass({
  loadUrlFromServer : function(){
    $.ajax({
      url : this.props.url,
      datatype : 'json',
      cache : false,
      success: function(data){
        this.setState({data : data});
      }.bind(this)
    })
  },

   getInitialState : function(){
    return {data : []};
   },

   componentDidMount : function(){
    this.loadUrlFromServer();
    setInterval(this.loadUrlFromServer,
                this.props.pollInterval)
   },
   render: function(){
    if(this.state.data){
      console.log('DATA!')
      var urlNodes = this.state.data.map(function(url){
         return <li> {url.short_url} </li>   
      })
    }
    return (
      <div>
        <h1>Hello React!</h1>
        <ul>
            {urlNodes}
        </ul>
      </div>
    )
   } 

})



export default App;
