import React, { Component } from 'react';
import $ from 'jquery'
import {Link} from 'react-router-dom'

var createReactClass = require('create-react-class')

var FullList = createReactClass({
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
         return <li key={url.id}> <Link to={'/list/${url.id}'}>{url.id}</Link> </li>   
      })
    }
    return (
      <div>
        <h1>URL List</h1>
        <ul>
            {urlNodes}
        </ul>
      </div>
    )
   } 

})

export default FullList