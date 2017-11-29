import { mount } from 'vue-test-utils'
import expect from 'expect'
import App from '../src/components/App.vue'

describe('App', () => {
  it('show Hello Vue text', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('Hello Vue!')
  })
})
