import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './setup-dom'
import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}

test('Container class exists', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.container').exists(), true)
})

test('Logo class in nav bar contains gamr', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.logo a').text(), 'gamr')
})

test('H1 renders', t => {
  const wrapper = render(<App />)
  t.is(wrapper.find('h1').text(), 'Welcome to gamr')
})
