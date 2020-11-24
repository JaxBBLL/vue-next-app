import { defineComponent, createVNode, render } from 'vue'
import Main from './Main'
const PhotoViewConstructor = defineComponent(Main)

const PhotoView = function(url) {
  const options = { url }
  const instance = createVNode(PhotoViewConstructor, options)
  const container = document.createElement('div')
  render(instance, container)
  document.body.appendChild(instance.el)
  return instance
}

export default PhotoView
