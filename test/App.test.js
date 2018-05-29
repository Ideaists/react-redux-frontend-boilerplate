import App from '../src/components/App'
import React from 'react'
import { shallow, mount } from 'enzyme'
import expect from 'expect'
import { MemoryRouter } from 'react-router-dom'
import HomePage from '../src/components/home'
import AboutPage from '../src/components/about'
import LoginPage from '../src/components/login'
import RegisterPage from '../src/components/register'
import TermsAndConditionsPage from '../src/components/terms-and-conditions'
import PrivacyPolicyPage from '../src/components/privacy-policy'
import NotFoundPage from '../src/components/not-found'

describe('App', () => {
  
  test('should match snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('h1').text()).toBe('Plain React Front-End Boilerplate')
    expect(wrapper).toMatchSnapshot
  })

  test('invalid path should redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/random' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(HomePage)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });
  
})