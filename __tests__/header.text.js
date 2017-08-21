/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/Header'

describe('With Enzyme', () => {
  it('App shows header', () => {
    const app = shallow(<Header />)
    expect(app.find('p').text()).toBe('header');
    
  })
})

