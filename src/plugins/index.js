import Vant from './vant'
import custom from './custom'

function install(app) {
  var components = [Vant, custom]
  components.forEach(function(item) {
    if (item.install) {
      app.use(item)
    }
  })
}

export default {
  install: install
}
