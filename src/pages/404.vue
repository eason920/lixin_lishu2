<template>
  <div class="bg">
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
.bg {
  background-image: url('~@/assets/img/404-bg.png');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
}
@media screen and (max-width: 767px) {
  .bg {
    background-image: url('~@/assets/img/404-bg-m.png');
  }
}
</style>

<script>
// import gtm from '@/mixins/gtm.js'

export default {
  name: '404',
  // mixins: [gtm],
  components: {},

  methods: {},
}
</script>
