<template>
  <div>
    <div>
      <p>姓名：{{ userInfo.username }}</p>
      <p>年龄：{{ userInfo.age }}</p>
      <p>性别：{{ userInfo.gender }}</p>
    </div>
    <button type="button" @click="onClick">click</button>
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  setup() {
    const msg = ref("Welcome to Your Vue.js App");
    const userInfo = reactive({
      username: "JaxBBLL",
      age: 18,
      gender: 1
    });

    const onClick = () => {
      msg.value = "clicked button";
    };

    return {
      onClick,
      msg,
      userInfo
    };
  }
};
</script>
