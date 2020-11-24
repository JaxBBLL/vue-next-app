<template>
  <h3>{{ msg }}</h3>
  <p>{{ $attrs.time }}</p>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: String
  },
  setup(props, { attrs }) {
    console.log(attrs)
  }
}
</script>
