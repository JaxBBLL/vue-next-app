<template>
  <section>
    <Message :msg="msg" />
    <button class="btn btn-primary" type="button" @click="onClick">
      change msg
    </button>
  </section>
</template>

<script>
import { ref } from "vue";
import Message from "@/components/Message.vue";

export default {
  name: "Home",
  components: {
    Message
  },
  setup() {
    const msg = ref("Welcome to Your Vue.js App");

    const onClick = () => {
      msg.value = "clicked button";
    };

    return {
      onClick,
      msg
    };
  }
};
</script>
