import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullList from './FullList'
import Detail from './Detail'

// The Roster component matches one of two different routes
// depending on the full pathname
const List = () => (
  <Switch>
    <Route exact path='/list' component={FullList}/>
  </Switch>
)


export default List