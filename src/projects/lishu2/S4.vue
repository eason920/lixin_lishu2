<template>
  <div class="relative">
    <section id="sec4">
      <div class="title"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        v-if="!isMobile"
      >台北雙星領銜 新北三大核心共榮優勢地段</div>
      <div class="pic"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >
        <img src="./S4/map.jpg" />
        <img src="./S4/img.png" />
        <div class="gradient"></div>
        <div class="mm">黃金四角正核心</div>
      </div>
      <div class="title" v-if="isMobile"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >台北雙星領銜 新北三大核心共榮優勢地段</div>
      <div class="msg"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >
      「大都會水岸特區」環擁雙北國家級重磅建設，<br v-if="isMobile" />
      東以一橋之距與台北雙星特區共好共榮，<br />
      跨步南向新北第二行政中心，打造三重新市政特區，<br v-if="isMobile" />
      串聯西側新北產業園區以及新莊副都心，繁華隨享，<br />
      連通北面銀河灣計畫，水岸觀光娛樂醫療新未來，<br v-if="isMobile" />
      黃金四角正核心的關鍵位置，最好的願景都站在這裡！
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      isTablet
    }
  },

  methods: {},

  created() {},

  computed: {}
}
</script>

<style lang="sass" scoped>
@import "src/assets/style/myvar"
.title
  color: $yellow
.pic
  width: 100%
  position: relative
  img
    width: 100%
    vertical-align: bottom
    &:nth-child(2)
      position: absolute
      top: 0
      left: 0
.msg
  color: #fff
  // letter-spacing: 1.5px
  border: solid #fff
  border-width: 0 1px

@media screen and (min-width: $bp-pc)
  #sec4
    @include lish2pcW
    padding: 8vh 0

  .title
    margin: 0 0 3vw
  .msg
    margin-top: 3vw

@media screen and (max-width: $bp-mb)
  #sec4
    margin-bottom: 20vw
  .title
    margin: 10vw 0 5vw
  .msg
    border: none
    span
      display: block


// ====================================
// == msg
// ====================================
.gradient
  position: absolute
  width: 100%
  height: 80px
  bottom: 0
  background-image: linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0))

.mm
  position: absolute
  right: 0.5em
  bottom: 0.5em
  color: #fff
  font-size: 12px
  font-family: Arial, "Noto Sans TC", sans-serif
@media screen and (max-width: $bp-mb)
  .mm
    font-size: 8px
</style>
