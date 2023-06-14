<template>
  <div class="mask">
    <section data-aos="fade-up" data-aos-delay="300">
      <icon class="icon" :data="vueIcon" />
    </section>
    <section data-aos="fade-up" data-aos-delay="300">
      <p>
        請將裝置轉至橫式
        <br />體驗最佳瀏覽方式
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';

.mask {
  background-color: $mask_bg_color;
  background-image: $mask_bg_image;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  display: none;

  p {
    color: $mask_color;
    margin-top: 20px;
    font-size: 22px;
  }

  .icon {
    width: 100px;
    height: auto;
  }

  svg {
    fill: $mask_icon_color;
    width: 100px;
  }
}

@media only screen and (max-device-width: 1030px) and (min-device-width: 768px) and (orientation: portrait) {
  .mask {
    display: flex !important;
  }
}
</style>

<script>
import vueIcon from '../assets/svg/tip.svg'

export default {
  name: 'AstrictMask',
  data() {
    return {
      vueIcon,
    }
  },
}
</script>
