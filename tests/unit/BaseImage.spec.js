import { shallow } from '@vue/test-utils'
import BaseImage from '../../src/components/BaseImage.vue'

describe('BaseImage.vue', () => {

  it('set props.src as background image for div element', () => {

    const src = './path/to/image/image.png'
    const wrapper = shallow(BaseImage, {
      propsData: { src }
    })
    expect(wrapper.element.style.backgroundImage).toEqual(`url(${src})`)
  })

})
