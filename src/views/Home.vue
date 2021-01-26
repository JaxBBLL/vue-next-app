<template>
  <Header title="home page" />
  <div>
    <Message :msg="msg" :time="Date.now()" />
    <van-button type="primary" @click="onClick">change</van-button>
  </div>
  <p>
    <img @click="$photoview(src)" :src="src" width="100" class="img" />
  </p>
</template>

<script>
import { ref } from 'vue'
import Message from '@/components/Message.vue'
export default {
  name: 'Home',
  components: {
    Message
  },
  setup() {
    const msg = ref('Welcome to Your Vue.js App')
    const onClick = () => {
      msg.value = 'clicked button'
    }
    return {
      onClick,
      msg
    }
  },
  data() {
    return {
      src: 'https://www.dogedoge.com/assets/new_logo.min.png'
    }
  }
}
</script>
<style lang="less" scoped>
.img {
  border: 1px solid #ddd;
  cursor: zoom-in;
}
</style>
