import { searchDict } from '@/common/util.js'
import PhotoView from '@/components/PhotoView/index'

function install(app) {
  app.config.globalProperties.$dict = searchDict
  app.config.globalProperties.$photoview = PhotoView
}

export default {
  install
}
