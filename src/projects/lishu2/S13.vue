<template>
  <div class="relative">
    <section id="sec13">
      <ball class="ball is1" />
      <ball2 class="ball is2" />
      <ball class="ball is3" />
      <!-- PC -->
      <div class="is_pc" v-if="!isMobile">
        <div class="logoBox">
          <div
            class="logoBox_logo"
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="2000"
          >
            <img src="./S13/pc_logo_top.png" />
          </div>
          <div
            class="logoBox_sub"
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="2000"
          >
            <img src="./S13/subtitle.png" />
          </div>
        </div>
        <div class="titleBox">
          <div class="titleBox_info">
            <div class="titleBox_apoint">
              <div class="apoint"
                data-aos-once="false"
                data-aos="fade-in"
                data-aos-delay="0"
                data-aos-duration="1800"
              >
                <img class="title_box_img2" src="./S1/appoint_pc.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- MB -->
      <div class="is_mb" v-else>
        <div class="logoBox">
          <div
            class="logoBox_logo"
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="2000"
          >
            <img src="./S13/mb_logo_top.png" />
          </div>
          <div
            class="logoBox_sub"
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="2000"
          >
            <img src="./S13/subtitle.png" />
          </div>
        </div>

        <div class="titleBox">
          <div
            class="titleBox_apoint"
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <div class="apoint">
              <img class="title_box_img2" src="./S1/appoint_pc.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
@import "src/assets/style/myvar"

.logoBox
  position: absolute
  left: 0
  right: 0
  margin: auto
  display: flex
  flex-direction: column
  align-items: center
  img
    width: 100%

// --------------------------------
.titleBox
  position: absolute
  bottom: 0
  width: 100%
  display: flex

.apoint
  // @include classicHover
  transition: .3s!important
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
  background-color: rgba(0, 53, 85, 0)
  border:
    style: solid
    width: 2px
    color: #fff!important
  &:hover
    background-color: rgba(0, 53, 85, 1)

@media screen and (min-width: $bp-pc)
  #sec13
    // height: 56.25vw
    height: 100vh
    overflow: hidden
    min-height: calc(100vw * 1000 / 1920)
    max-height: calc(100vw * 1060 / 1920)
    background:
      image: url(./S13/bg.jpg)
      size: cover
      color: #004A77
      position: 50% 100%
  .is_pc
    position: relative
    z-index: 3
    height: 100%

    // --------------------------------
    .logoBox
      top: 110px
      width: 55vw
    .logoBox_logo
      width: 50%
      margin-bottom: 1.5vw
    .logoBox_sub
      width: 70%

    // --------------------------------
    .titleBox
      justify-content: flex-end
      padding: 0 2vw 3.5vw 0
      align-items: stretch

    .titleBox_info
      display: flex
      z-index: 2
    .apoint
      height: 6.2vw
      width: 28.2em
    .title_box_img2
      width: 8.5vw

@media screen and (min-width: 1500px)
  #sec13
    background:
      // position: 0 -10vh

@media screen and (max-width: $bp-mb)
  #sec13
    background:
      image: url(./S13/bgm.jpg)
      size: cover
      color: #004A77
      position: 50% 0
  .is_mb
    position: relative
    height: calc(100vw * 555 / 375)
    z-index: 3
    & > div
      position: absolute
      z-index: 1

    // --------------------------------
    .logoBox
      top: 13vw
    .logoBox_logo
      width: 70%
      margin-bottom: 5vw
    .logoBox_sub
      width: 86%

    // --------------------------------
    .titleBox
      flex-direction: column
      align-items: center
      padding-bottom: 9vw
      justify-content: flex-end

    .titleBox_apoint
      width: 100%
      display: flex
      justify-content: center
    .apoint
      width: 24.2em
      padding: 3.6vw 0
      background-color: rgba(0, 53, 85, 0)!important
      border:
        width: 1px

    .title_box_img2
      width: 20vw

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
      bottom: 48vw
    &.is3
      width: 25px
      height: 25px
      right: 8vw
      bottom: 60vw

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
    $('.apoint,.appoint').click(() => {
      $('html,body').animate({ scrollTop: $('#contact').offset().top }, 1000)
    })
  },
  computed: {}
}
</script>
