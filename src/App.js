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
import ListSponsor from './components/ListSponsor'
import EditSponsor from './containers/EditSponsor'
import EmailInv from './containers/EmailInv'
import AddCollaborator from './containers/AddCollaborator'
import EditTalk from './containers/EditTalk'

function App ({ isAuth }) {
  return (
    <BrowserRouter>
      <Switch>
        <Home exact path='/' />
        <Signup exact path='/signup' />
        <Login exact path='/login' />
        <Route exact path='/dashboard' component={isAuth ? Dashboard : Login} />

        <Route
          exact
          path='/dashboard/NewEvent'
          component={isAuth ? NewEvent : Login}
        />
        <Route
          exact
          path='/dashboard/NewOrg'
          component={isAuth ? NewOrg : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName'
          component={isAuth ? OrgPreview : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit'
          component={isAuth ? EditEvent : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/info'
          component={isAuth ? EditInfo : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/schedule'
          component={isAuth ? EditSchedule : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/schedule/:dayId'
          component={isAuth ? EditDay : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/scheduleDay'
          component={isAuth ? EditDate : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/scheduleDay/:dayId'
          component={isAuth ? EditDate : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/schedule/:dayId/new'
          component={isAuth ? EditTalk : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/schedule/:dayId/:conferenceId'
          component={isAuth ? EditTalk : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/sponsor/new'
          component={isAuth ? EditSponsor : Login}
        />
        <Route
          exact
          path='/dashboard/organizationName/:eventId/addCollaborator'
          component={isAuth ? AddCollaborator : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/sponsor/edit'
          component={isAuth ? ListSponsor : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/sponsor/edit/:associatedId'
          component={isAuth ? EditSponsor : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/email'
          component={isAuth ? EmailInv : Login}
        />

        <EventsPreview exact path='/events' />
        <PublicEvents exact path='/:organizationName/:url' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
