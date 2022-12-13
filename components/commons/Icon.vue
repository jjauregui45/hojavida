<template>
  <i :class="['mdi', `mdi-${name}`, className]"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
};
</script>
