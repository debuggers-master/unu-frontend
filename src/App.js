import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './containers/Login'
import EventsPreview from './components/EventsPreview'
import PublicEvents from './components/PublicEvents'
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
import EditDate from './containers/EditDate'
import ListSponsor from './containers/ListSponsor'
import EditSponsor from './containers/EditSponsor'
import EditTalk from './containers/EditTalk'

function App ({ isAuth }) {
  return (
    <BrowserRouter>
      <Switch>
        <Home exact path='/' />
        <Login exact path='/login' />
        <Signup exact path='/signup' />
        <Route exact path='/dashboard' component={isAuth ? Dashboard : Login} />
        <Route exact path='/dashboard/NewEvent' component={isAuth ? NewEvent : Login} />
        <Route exact path='/dashboard/NewOrg' component={isAuth ? NewOrg : Login} />
        <Route exact path='/dashboard/:organizationId' component={isAuth ? OrgPreview : Login} />
        <Route exact path='/dashboard/:organizationId/:eventId/edit' component={isAuth ? EditEvent : Login} />
        <Route exact path='/dashboard/:organizationId/:eventId/edit/info' component={isAuth ? EditInfo : Login} />
        <Route exact path='/dashboard/:organizationId/:eventId/edit/schedule' component={isAuth ? EditSchedule : Login} />
        <Route exact path='/dashboard/:organizationId/:eventId/edit/schedule/:dayId' component={isAuth ? EditDay : Login} />
        <Route exact path='/dashboard/:organizationId/:eventId/edit/schedule/:dayId/date' component={isAuth ? EditDate : Login} />
        <Route exact path='/dashboard/:organizationId/:eventId/edit/schedule/:dayId/new' component={isAuth ? EditTalk : Login} />
        <Route exact path='/dashboard/:organizationId/:eventId/edit/schedule/:dayId/:conferenceId' component={isAuth ? EditTalk : Login} />
        <Route exact path='/dashboard/:organizationId/:eventId/edit/sponsor/edit' component={isAuth ? ListSponsor : Login} />
        <Route exact path='/dashboard/:organizationId/:eventId/edit/sponsor/edit/:associatedId' component={isAuth ? EditSponsor : Login} />
        <EventsPreview exact path='/events' />
        <PublicEvents exact path='/:corp/:event' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
