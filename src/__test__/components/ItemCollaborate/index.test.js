import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { BrowserRouter, Switch } from 'react-router-dom'
import ItemCollaborate from '../../../components/ItemCollaborate'
import ProviderMock from '../../../mocks/providerMock'

describe('<ItemCollaborate />', () => {
  const footer = shallow(<ItemCollaborate />)
  test('ItemCollaborate render without crashing', () => {
    expect(footer.length).toEqual(1)
  })
})
