import { searchDict } from '@/common/util.js'
import Header from '@/components/Header'
import PhotoView from '@/components/PhotoView/index'

function install(app) {
  app.config.globalProperties.$dict = searchDict
  app.config.globalProperties.$photoview = PhotoView
  app.component(Header.name, Header)
}

export default {
  install
}
