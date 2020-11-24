import { searchDict } from '@/common/util.js'

function install(app) {
  app.config.globalProperties.$dict = searchDict
}

export default {
  install
}
