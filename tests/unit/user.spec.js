import { shallowMount } from '@vue/test-utils'
import User from '@/components/User.vue'

const wrapperFactory = ({ propsData } = {}) => {
  return shallowMount(User, {
    propsData: {
      ...propsData,
    },
  })
}

describe('User', () => {
  it('user is not defined, should not render user info', () => {
    let user
    const wrapper = wrapperFactory({
      propsData: {
        user
      }
    })
    expect(wrapper.vm.$props.user).toBe(undefined)
    expect(wrapper.find('.user').exists()).toBeFalsy()
  })

  it('user is defined', () => {
    let user = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
          }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }
    const wrapper = wrapperFactory({
      propsData: {
        user
      }
    })
    expect(wrapper.vm.$props.user).toBe(user)
    expect(wrapper.find('.user').exists()).toBeTruthy()
  })

  it('img is not defined, should throw an error', () => {
    let img
    let user = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
          }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    } 
    const wrapper = wrapperFactory({
      propsData: { img, user }
    })
    expect(wrapper.find('.user-author-avatar').exists()).toBeFalsy()
  })

  it('img is defined, should render img', () => {
    let user = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
          }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }
    let img = 'https://via.placeholder.com/150/771796'
    const wrapper = wrapperFactory({
      propsData: { img, user }
    })
    expect(wrapper.find('.user-author-avatar').exists()).toBeTruthy()
  })
})
