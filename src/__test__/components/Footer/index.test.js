import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { BrowserRouter, Switch } from 'react-router-dom'
import Footer from '../../../components/Footer'
import ProviderMock from '../../../mocks/providerMock'

describe('<Footer />', () => {
  const footer = shallow(<Footer />)
  test('Footer render without crashing', () => {
    expect(footer.length).toEqual(1)
  })
})
