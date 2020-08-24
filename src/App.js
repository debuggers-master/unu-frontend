import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './containers/Login'
import EventsPreview from './components/EventsPreview'
import Signup from './containers/Signup'
import Home from './components/Home'
import TemplateOne from './components/EventTemplates/TemplateOne'
import TemplateTwo from './components/EventTemplates/TemplateTwo'

import { eventMock } from './mocks/eventMock.js'

const Dashboard = () => {
  return <div>Bienvenido, Logeado exitosamente</div>
}

function App ({ isAuth }) {
  return (
    <BrowserRouter>
      <Switch>
        <TemplateOne templateData={eventMock} exact path='/t1' />
        <TemplateTwo exact path='/t2' />
        <Home exact path='/' />
        <EventsPreview exact path='/events' />
        <Login exact path='/login' />
        <Signup exact path='/signup' />
        <Route exact path='/dashboard' component={isAuth ? Dashboard : Login} />
        <EventsPreview exact path='/events' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
