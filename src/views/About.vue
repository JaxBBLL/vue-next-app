<template>
  <Header title="about page" />
  <p class="text-primary">姓名：JaxBBLL</p>
  <p>性别：{{ $dict(gender, 'gender') }}</p>
</template>
<script>
export default {
  data() {
    return {
      gender: 0
    }
  }
}
</script>
