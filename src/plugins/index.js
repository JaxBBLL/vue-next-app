import useVant from './useVant'
import useCustom from './useCustom'

function install(app) {
  useVant(app)
  useCustom(app)
}

export default {
  install
}
