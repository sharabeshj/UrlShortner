import React, { Component } from 'react';
import $ from 'jquery'
import {Link} from 'react-router-dom'

// var createReactClass = require('create-react-class')

// var FullList = createReactClass({
//   loadUrlFromServer : function(){
//     $.ajax({
//       url : '/api',
//       datatype : 'json',
//       cache : false,
//       success: function(data){
//         this.setState({data : data});
//       }.bind(this)
//     })
//   },

//    getInitialState : function(){
//     return {data : []};
//    },

//    componentDidMount : function(){
//     this.loadUrlFromServer();
//     // setInterval(this.loadUrlFromServer,
//     //             1000)
//    },
//    render: function(){
//     if(this.state.data){
//       console.log(this.state.data)
//       var urlNodes = this.state.data.map(function(url){
//          return <li key={url.id}> <a href = {url.long_url}>{url.short_url}</a> </li>   
//       })
//     }
//     return (
//       <div>
//         <h1>URL List</h1>
//         <ul>
//             {urlNodes}
//         </ul>
//       </div>
//     )
//    } 

// })

class FullList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : []
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.timerID = setInterval(
      ()=>this.loadUrlFromServer());
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  loadUrlFromServer(){
    $.ajax({
      url : '/api',
      datatype : 'json',
      cache : false,
      success: function(data){
        this.setState({data : data});
      }.bind(this)
    })
  }
  // rediect(long_url){
  //   window.location.replace(long_url);
  // }
  render(){
    if(this.state.data){
      // console.log(this.state.data)
      var urlNodes = this.state.data.map(function(url){
         return <li key={url.id}> <a href ="#" onClick = {() => {window.open(url.long_url);}}>{url.short_url}</a> </li>   
      })
    }
    return (
      <div>
        <h1>URL List</h1>
        <ul>
            {urlNodes}
        </ul>
      </div>
    );
  }
}

export default FullList