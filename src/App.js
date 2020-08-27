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
import ListSponsor from './containers/ListSponsor'
import EditSponsor from './containers/EditSponsor'
import EditTalk from './containers/EditTalk'
import TemplateOne from './components/EventTemplates/TemplateOne'
import TemplateTwo from './components/EventTemplates/TemplateTwo'
import { eventMock } from './mocks/eventMock.js'

function App ({ isAuth }) {
  return (
    <BrowserRouter>
      <Switch>
        <PublicEvents exact path='/:corp/:event' />
        <TemplateOne templateData={eventMock} exact path='/t1' />
        <TemplateTwo templateData={eventMock} exact path='/t2' />
        <Home exact path='/' />
        <EventsPreview exact path='/events' />
        <Login exact path='/login' />
        <Signup exact path='/signup' />
        <Route exact path='/dashboard' component={isAuth ? Dashboard : Login} />
        <Route
          exact
          path='/organizationName'
          component={isAuth ? OrgPreview : Login}
        />
        <Route exact path='/NewEvent' component={isAuth ? NewEvent : Login} />
        <Route exact path='/NewOrg' component={isAuth ? NewOrg : Login} />
        <Route
          exact
          path='/dashboard/organizationName/:eventId/edit'
          component={isAuth ? EditEvent : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/info'
          component={isAuth ? EditInfo : Login}
        />
        <Route
          exact
          path='/dashboard/organizationName/eventId/edit/schedule'
          component={isAuth ? EditSchedule : Login}
        />
        <Route
          exact
          path='/dashboard/organizationName/eventId/edit/schedule/dayId'
          component={isAuth ? EditDay : Login}
        />
        <Route
          exact
          path='/dashboard/organizationName/eventId/edit/schedule/dayId/talkId'
          component={isAuth ? EditTalk : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/sponsor/edit'
          component={isAuth ? ListSponsor : Login}
        />
        <Route
          exact
          path='/dashboard/:organizationName/:eventId/edit/sponsor/new'
          component={isAuth ? EditSponsor : Login}
        />
        <Route
          exact
          path='/dashboard/organizationName/:eventId/edit/sponsor/edit/:sponsorId'
          component={isAuth ? EditSponsor : Login}
        />
        <EventsPreview exact path='/events' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
