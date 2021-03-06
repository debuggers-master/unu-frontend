import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import reducers from '../reducers'

const initialState = {
  /*eslint-disable */
  user: JSON.parse(sessionStorage.getItem('myData')) || {},
  /* eslint-enable */
  newEvent: {},
  errors: {}
}
const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(thunk))
)

const ProviderMock = props => (
  <Provider store={store}>{props.children}</Provider>
)

module.exports = ProviderMock
