import React from 'react'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Home from './containers/Home'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
const Dashboard = () => {
  return <div>Bienvenido, Logeado exitosamente</div>
}
function App ({ isAuth }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Login exact path='/login' />
        <Signup exact path='/signup' />
        <Route exact path='/dashboard' component={isAuth ? Dashboard : Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
