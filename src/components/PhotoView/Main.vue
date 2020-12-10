<template>
  <transition name="transition" appear @after-leave="handleAfterLeave">
    <div class="wrap" v-if="visiable" @click.stop="close">
      <img :src="url" />
    </div>
  </transition>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
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
})
</script>
<style lang="less" scoped>
.transition-enter {
  opacity: 0;
}
.transition-enter-active {
  opacity: 0;
}
.transition-enter-to,
.transition-leave {
  opacity: 1;
  transition: all 0.3s ease-out;
}
.transition-leave-to {
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
  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    cursor: zoom-out;
  }
}
</style>
