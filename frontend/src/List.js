import React, { Component } from 'react';
import $ from 'jquery'
var createReactClass = require('create-react-class')

var List = createReactClass({
  loadUrlFromServer : function(){
    $.ajax({
      url : '/api',
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
    // setInterval(this.loadUrlFromServer,
    //             1000)
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

export default List