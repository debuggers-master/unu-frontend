import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { BrowserRouter, Switch } from 'react-router-dom'
import Dashboard from '../../../containers/Dashboard'
import ProviderMock from '../../../mocks/providerMock'

describe('<Dashboard />', () => {
  test('Header logo image', () => {
    it('renders without crashing', () => {
      shallow(<AddCollaborator />)
    })
  })
})
