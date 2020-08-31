import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import { BrowserRouter, Switch } from 'react-router-dom'
import AddCollaborator from '../../../containers/AddCollaborator'
import ProviderMock from '../../../mocks/providerMock'

describe('<AddCollaborator />', () => {
  const addCollaborator = mount(
    <ProviderMock>
      <BrowserRouter>
        <AddCollaborator match={{ params: '' }} />
      </BrowserRouter>
    </ProviderMock>
  )
  test('Renders without crashing', () => {
    expect(addCollaborator.length).toEqual(1)
  })
})
