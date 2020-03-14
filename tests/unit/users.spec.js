import { shallowMount } from '@vue/test-utils'
import Users from '@/views/Users.vue'

const wrapperFactory = ({ propsData } = {}) => {
  return shallowMount(Users, {
    propsData: {
      ...propsData
    }
  })
}

describe('Users.vue', () => {
  it('renders loading status', () => {
    const msg = 'Users'
    const wrapper = wrapperFactory({
      data () {
        return {
          users: [],
          photos: [],
          loading: true,
          loadingImg: true
        }
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders list of users', () => {
    const wrapper = wrapperFactory()
    expect(wrapper.find('.users').exists()).toBe(true)
  })
})
