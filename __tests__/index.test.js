/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import App from '../pages/index.js'
import SubComponent from '../components/SubComponent'

describe('With Enzyme', () => {
  it('App shows SubComponent', () => {
    const app = shallow(<App />)
    expect(app.containsMatchingElement(<SubComponent/>)).toBeTruthy();
  })
})
