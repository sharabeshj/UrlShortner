import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

var createReactClass = require('create-react-class')


var Detail = createReactClass({
  loadUrlFromServer : function(){
    $.ajax({
      url : '/api/'+parseInt(this.props.match.params.id,10),
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
      console.log(this.state.data)
      var urlDetails = this.state.data.map(function(url){
         return <h2>Long URL : {url.long_url}</h2>   
      })
    }
    return (
      <div>
        <h1>URL Detail</h1>
            {urlDetails}
      </div>
    )
   } 

})

export default Detail