<template>
  <div class="thanks">
    <a href="/">
      <img src="~@/assets/img/thank-img.png" alt="" class="img">
      <img src="~@/assets/img/thank-img-hover.png" alt="" class="img-hover">
    </a>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
.thanks {
  width: 100vw;
  height: 100vh;
  background: $phone_thanks_bg;
  background-size: cover;
  background-position: center;
  // background-image: linear-gradient(to top, rgba(0, 0, 0, 0.24), rgba(156, 30, 35, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    .img {
      position: absolute;
      opacity: 1;
    }
    .img-hover {
      opacity: 0;
    }

    &:hover {
      .img {
        opacity: 0;
      }
      .img-hover {
        opacity: 1;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .thanks {
    a {
      .img, .img-hover {
        width: 90vw;
      }
    }
  }
}
</style>

<script>

export default {
  name: 'phoneThanks',
  components: {},

  methods: {},
}
</script>
