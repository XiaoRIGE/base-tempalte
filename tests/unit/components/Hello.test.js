// @vitest-environment happy-dom

import { mount } from '@vue/test-utils'
import Hello from '@/components/globalComponents/Hello.vue'
import { test, expect } from 'vitest'

test('mount component', async () => {
  expect(Hello).toBeTruthy()

  const wrapper = mount(Hello, {
    props: {
      count: 4,
    },
  })

  expect(wrapper.text()).toContain('4 x 2 = 8')
  // toMatchSnapshot 这可确保某个值匹配最近的快照
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 3 = 12')

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 4 = 16')
})
