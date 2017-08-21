/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import App from '../pages/index.js'
import Header from '../components/Header'

describe('With Enzyme', () => {
  it('App shows header', () => {
    const app = shallow(<App />)
    expect(app.find(<Header />));
    
  })
})

