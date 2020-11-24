<template>
  <transition name="fade" appear @after-leave="handleAfterLeave">
    <div class="wrap" @click.stop="close" v-if="visiable">
      <div class="content" @click.stop>
        <img :src="url" />
        <i class="close" @click.stop="close">&times;</i>
      </div>
    </div>
  </transition>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'PhotoView',
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  setup() {
    const state = reactive({
      visiable: true
    })
    const close = () => {
      state.visiable = false
    }
    const handleAfterLeave = currentElement => {
      if (currentElement && currentElement.parentNode) {
        currentElement.parentNode.removeChild(currentElement)
      }
    }

    return {
      ...toRefs(state),
      close,
      handleAfterLeave
    }
  }
}
</script>
<style lang="less" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
  transition: all 0.3s ease-out;
}
.fade-leave-to {
  opacity: 0;
}
.wrap {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.96);
  z-index: 3000;
  transition: all 0.3s;
  font-size: 14px;
  .content {
    position: relative;
    display: flex;
    max-width: 80vw;
    max-height: 80vh;
    text-align: center;
  }
  img {
    max-width: 100%;
    object-fit: contain;
  }
  .close {
    position: absolute;
    right: -30px;
    top: -30px;
    color: #fff;
    font-size: 2.2em;
    cursor: pointer;
  }
}
</style>
