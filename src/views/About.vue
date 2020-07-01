<template>
  <section>
    <div class="flex">
      <p class="flex-1">姓名：{{ userInfo.username }}</p>
      <p class="flex-1">年龄：{{ userInfo.age }}</p>
      <p class="flex-1">性别：{{ userInfo.gender }}</p>
    </div>
  </section>
</template>
<script>
import { reactive } from "vue";

export default {
  name: "About",
  setup() {
    const userInfo = reactive({
      username: "JaxBBLL",
      age: 18,
      gender: 1
    });

    return {
      userInfo
    };
  }
};
</script>
