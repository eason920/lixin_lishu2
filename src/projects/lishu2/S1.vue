<template>
  <div class="relative">
    <section id="sec2">
      <ball class="ball is1" />
      <ball2 class="ball is2" />
      <ball class="ball is3" />
      <!-- PC -->
      <div class="is_pc" v-if="!isMobile">
        <div class="logo" data-aos-once="false" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1400">
          <span class="en"><b>RHINE</b><br />RIVER</span>
          <img class="img" loading="lazy" src="./S1/logo.png" />
          <img class="t" loading="lazy" src="./S1/t.png" />
        </div>
        <div class="title">
          <div
            data-aos-once="false"
            data-aos="fade-in"
            data-aos-delay="500"
            data-aos-duration="1400"
          >
            <img class="title_img1" src="./S1/subtitle.png" />
          </div>
          <div
            data-aos-once="false"
            data-aos="fade-in"
            data-aos-delay="0"
            data-aos-duration="1800"
          >
            <div class="title_box">
              <img class="title_box_img2" src="./S1/appoint_pc.png" />
            </div>
          </div>
        </div>
        <div
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="2000"
          class="bottom_water"
        >
          <img src="./S1/pc_water.png" />
        </div>
      </div>
      <!-- MB -->
      <div class="is_mb" v-else>
        <div class="logo" data-aos-once="false" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1400">
          <img loading="lazy" src="./S1/logo_pc.png" />
        </div>
        <div class="subtitle" data-aos-once="false" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1400">
          <img loading="lazy" src="./S1/subtitle_mb.png" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
@import "src/assets/style/myvar"

@media screen and (min-width: $bp-pc)
  #sec2
    // height: 56.25vw
    height: 100vh
    overflow: hidden
    min-height: calc(100vw * 900 / 1920)
    max-height: calc(100vw * 1080 / 1920)
    background:
      image: url(./S1/bg.jpg)
      size: cover
      color: #004A77
      position: 0
  .is_pc
    position: relative
    z-index: 3
    height: 100%
    .logo
      position: absolute
      width: 35vw
      left: 13vw
      top: calc(50% - 12.5vw)
      color:#FFF
      filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25))
      img
        width: 100%
      .en
        position: absolute
        top:0
        left: 0
        text-align: left
        font:
          size: 4.9em
        letter-spacing: -0.01em
        line-height: 1.14
        b
          font:
            size:1.09em
      .img
        position: absolute
        top: 7.2em
        left: 16.85em
        width: 16em
      .t
        position: absolute
        top: 12.65em
        left: 0.5em
        width: 20em
      &::after
        content: ""
        background: #FFF
        height: 2px
        width: 11.5em
        position: absolute
        top: 13.95em
        left: 21.4em

        
    .title
      position: absolute
      bottom: 0
      left: 3vw
      display: flex
      padding:
        bottom: 3vw
      z-index: 2
    .title_img1
      width: 40vw // title height
      margin:
        right: 2vw
    .title_box
      @include classicHover
      transition: .3s
      padding: 0 33px
      display: flex
      align-items: center
      height: 100%
    .title_box_img2
      width: 10vw
    .title_bg
      height: 15vh
      background-image: linear-gradient(to top,rgba(0,0,0,1) 20%, rgba(0,0,0,.5) 85%, rgba(0,0,0,0))
      position: absolute
      bottom: 0
      z-index: 1
      width: 100%
    .bottom_water
      position: absolute
      bottom: -10px
      img
        width: 100%

@media screen and (min-width: 1500px)
  #sec2
    background:
      position: 0 -10vh

@media screen and (max-width: $bp-mb)
  #sec2
    background:
      image: url(./S1/bgm.jpg)
      size: cover
      color: #004A77
      position: center
  .is_mb
    position: relative
    height: calc(100vw * 443 / 250)
    z-index: 3
    & > div
      position: absolute
      z-index: 1
    img
      width: 100%
    .logo
      width: 65vw
      left: 4vw
      top: 36vw
    .subtitle
      width: 57vw
      bottom: 12vw
      left: 50%
      transform: translateX(-50%)!important

// ====================================
// == ball
// ====================================

.ball
  position: absolute
  z-index: 2
.box
  position: absolute
  width: 100%
  height: 100%
  &::after,&::before
    position: absolute
    content: ""
    display: block
    height: 100%
  &::after
    left: 0
    width: 40%
    background: linear-gradient(to right,  #004A77FF 0%, #004A7700 100%)
    z-index: 2
    transform: skewX(-15deg)
    transform-origin: 0 0
  &::before
    right:0
    width: 70%
    background: radial-gradient(100% 100% at 120% 30%, #004A77FF 30%,  #004A7700 90%)
    z-index: 2
    // transform: skewX(20deg)
    // transform-origin: 0 0
@media screen and (min-width: $bp-pc)
  .ball
    display: none
@media screen and (max-width: $bp-mb)
  .ball
    &.is1
      width: 10px
      height: 10px
      left: 8vw
      bottom: 60vw
    &.is2
      width: 15px
      height: 15px
      right: 42vw
      bottom: 50vw
    &.is3
      width: 25px
      height: 25px
      right: 8vw
      bottom: 66vw

</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import $ from 'jquery'

import ball from './ball.vue'
import ball2 from './ball2.vue'
export default {
  name: 'section1',
  components: {
    ball,
    ball2,
  },
  data() {
    return {
      isMobile,
      isTablet
    }
  },

  methods: {},

  created() {
   },

  mounted() {
    $('.title_box,.appoint').click(() => {
      $('html,body').animate({ scrollTop: $('#contact').offset().top }, 1000)
    })
  },
  computed: {}
}
</script>
