import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { BrowserRouter, Switch } from 'react-router-dom'
// function App () {
//   return <div id='App'>All works fine!</div>
// }
function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Home exact path='/' />
        <Login exact path='/login' />
        <Signup exact path='/signup' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
