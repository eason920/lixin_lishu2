<template>
  <div class="relative">
    <section id="sec4">
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
      <div class="txt">
      <div class="title"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >台北雙星領銜 新北第一環</div>
      <div class="msg"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >「大都會水岸特區」環擁國家級重磅建設，<br v-if="isMobile" />往東，一橋相連與台北雙星特區共享商機，<br v-if="isMobile" />南向，新北第二行政中心『三重新市政特區』，<br v-if="isMobile" />西臨，新北產業園區＆新莊副都心，繁華緊鄰，<br v-if="isMobile" />北行，銀河灣計畫，水岸觀光娛樂、醫療新未來。

      </div></div>
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
  border-left: 1px solid #fff

@media screen and (min-width: $bp-pc)
  #sec4
    @include lish2pcW
    padding: 8vh 0
  .txt
    display: flex
    justify-content: center
    align-items: center
    text-align: justify
    margin-top: 3em
    width: 114%
    position: relative
    left: -7%

  .title
    margin: 0
    white-space: nowrap
  .msg
    margin-left: 3em
    padding-left: 3em

@media screen and (max-width: $bp-mb)
  #sec4
    margin-bottom: 20vw
  .txt
    width: 85%
    margin: auto
  .title
    margin: 10vw 0 3vw
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
