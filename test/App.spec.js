import { mount } from 'vue-test-utils'
import App from '../src/components/App.vue'
import expect from 'expect'

describe('App', () => {
  it('show Hello Vue text', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('Hello Vue!')
  })
})
