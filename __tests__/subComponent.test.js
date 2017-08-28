/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import SubComponent from '../components/SubComponent'

describe('With Enzyme', () => {
  it('SubComponent shows Hello!', () => {
    const app = shallow(<SubComponent />)
    expect(app.find('p').text()).toBe('Hello!');
    
  })
})

