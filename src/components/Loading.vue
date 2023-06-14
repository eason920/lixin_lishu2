<template>
  <div :class="`loading-bg ${loading ? '' : 'hide'} ${isOpacity ? 'opacity': ''}`">
    <img
      src="~@/assets/img/loading_b.gif"
      alt
      class="loading-icon"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';

.loading-bg {
  background-color: $loading_bg_color;
  background-image: $loading_bg_image;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .loading-icon {
    width: 150px;
    // border-color: $loading_icon_color;
  }

  &.opacity {
    opacity: 0.8;
  }

  &.hide {
    animation: hide 1s ease-in 0s forwards;
  }

  &.none {
    display: none;
  }

  @keyframes hide {
    0% {
      oacity: 1;
      left: 0;
      display: block;
    }

    99% {
      opacity: 0;
      height: 100vh;
      // left: -100vw;
      // display: block !important; not work
      z-index: 1000;
    }

    100% {
      height: 0;
      opacity: 0;
      // display: none !important; not work
      z-index: -1000 !important;
    }
  }
}

@media screen and (max-width: 767px) {
  .loading-bg {
    &.hide {
      display: none;
    }
  }
}
</style>

<script>
// import { setTimeout } from 'timers'

export default {
  name: 'loadingComponent',

  props: ['loading', 'isOpacity'],

  data() {
    return {
      remove: false,
    }
  },

  watch: {
    loading: {
      handler(loading) {
        this.remove = !loading
      },
      // immediate: true,
    },
  },

  // created() {
  //   setTimeout(() => {
  //     this.remove = true
  //   }, 1000)
  // },
}
</script>
