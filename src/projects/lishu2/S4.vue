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
        <img src="./S4/bg.png" />
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
        <div>「大都會水岸特區」環擁雙北國家級重磅建設，<span>東以一橋之距與台北雙星特區共好共榮，</span></div>
        <div>跨步南向新北第二行政中心，打造三重新市政特區，<span>串聯西側新北產業園區以及新莊副都心，繁華隨享，</span></div>
        <div>連通北面銀河灣計畫，水岸觀光娛樂醫療新未來，<span>黃金四角正核心的關鍵位置，最好的願景都站在這裡！</span></div>
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
  font-size: 1.3em
.pic
  width: 100%
  position: relative
  img
    width: 100%
.msg
  color: #fff
  font-weight: lighter
  letter-spacing: 1.5px
  line-height: 1.6
  border-style: solid
  border-color: #fff
  border-width: 0 1px

@media screen and (min-width: $bp-pc)
  #sec4
    @include lish2pcW
    padding: 8vh 0

  .title
    margin: 0 0 3vw
  .msg
    font-size: 14px
    margin-top: 3vw

@media screen and (max-width: $bp-mb)
  #sec4
    margin-bottom: 20vw
  .title
    margin: 10vw 0 5vw
    font-size: 1.1em
  .msg
    font-size: 14px
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
  right: 10px
  bottom: 10px
  color: #fff
  font-size: 12px
</style>
