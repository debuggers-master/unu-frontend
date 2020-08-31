import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Header from '../../../components/Header'

describe('<Header />', () => {
  const header = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  test('Render header component', () => {
    expect(header.length).toEqual(1)
  })
})
