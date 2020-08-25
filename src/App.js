import React from 'react'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import OrgPreview from './containers/OrgPreview'
import NewEvent from './containers/NewEvent'
import NewOrg from './containers/NewOrg'
import EditEvent from './containers/EditEvent'
import EditInfo from './containers/EditInfo'
import EditSchedule from './containers/EditSchedule'
import EditDay from './containers/EditDay'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App ({ isAuth }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Login exact path='/login' />
        <Signup exact path='/signup' />
        <Route exact path='/dashboard' component={isAuth ? Dashboard : Login} />
        <Route exact path='/organizationName' component={isAuth ? OrgPreview : Login} />
        <Route exact path='/NewEvent' component={isAuth ? NewEvent : Login} />
        <Route exact path='/NewOrg' component={isAuth ? NewOrg : Login} />
        <Route exact path='/events/edit/organizationName/eventId' component={isAuth ? EditEvent : Login} />
        <Route exact path='/events/edit/info/organizationName/eventId' component={isAuth ? EditInfo : Login} />
        <Route exact path='/events/edit/agenda/organizationName/eventId' component={isAuth ? EditSchedule : Login} />
        <Route exact path='/events/edit/agenda/organizationName/eventId/dayId' component={isAuth ? EditDay : Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
