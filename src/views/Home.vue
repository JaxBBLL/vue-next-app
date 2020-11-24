<template>
  <h1>home page</h1>
  <div>
    <Message :msg="msg" />
    <button type="button" @click="onClick">change msg</button>
  </div>
  <p>性别：{{ $dict(gender, 'gender') }}</p>
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
      gender: 0
    }
  }
}
</script>
