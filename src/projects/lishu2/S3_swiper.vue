<template>
  <div>
    <div class="pre" @click="prevBtn"></div>
    <div class="nxt" @click="nextBtn"></div>
    <swiper v-if="isMobile" :options="swiperOption" ref="swiper4">
      <swiper-slide v-for="item in list" :key="'s4' + item">
        <div class="gradient"></div>
        <div class="msg">{{ item }}</div>
      </swiper-slide>
    </swiper>
    <swiper v-else :options="swiperOption" ref="swiper4">
      <swiper-slide v-for="item in 2" :key="'s4' + item">
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="sass" scoped>
@import src/assets/style/myvar


// --------------------------------
// -- SWITCH
// --------------------------------
.box
  font-size: 0
  overflow: hidden

@media screen and (min-width: $bp-pc)
  .box
    width: 37vw

@media screen and (max-width: $bp-mb)
  .box
    position: relative

// ====================================
// == SWIPER W/H
// ====================================
.swiper-slide
  background:
    position: 0 0
    size: contain
  position: relative

@media screen and (min-width: $bp-pc)
  .swiper-slide
    background-repeat: no-repeat
    &:nth-child(1), &:nth-child(3), &:nth-child(5)
      background-image: url('./S4/1.png')

    &:nth-child(2), &:nth-child(4), &:nth-child(6)
      background-image: url('./S4/2.jpg')
@media screen and (max-width: $bp-mb)
  .swiper-slide
    background-repeat: no-repeat
    &:nth-child(1), &:nth-child(5), &:nth-child(9)
      background-image: url('./S4/m1.jpg')

    &:nth-child(2), &:nth-child(6), &:nth-child(10)
      background-image: url('./S4/m2.jpg')

    &:nth-child(3), &:nth-child(7), &:nth-child(11)
      background-image: url('./S4/m3.jpg')

    &:nth-child(4), &:nth-child(8), &:nth-child(12)
      background-image: url('./S4/m4.jpg')
.swiper-container
  z-index: 2
@media screen and (min-width: $bp-pc)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 34.4vw // w * 0.562

  // w
  .swiper-container
    width:  100%

@media screen and (max-width: $bp-mb)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 56vw // w * 2.87

  // w
  .swiper-container
    // width: 80vw

  // gurter
  .box
    position: relative
    & > div
      //padding-left: calc( (100vw - 83vw) / 2 + 14px)

// --------------------------------
// PRE NEX
.box
  position: relative

.pre, .nxt
  display: block
  position: absolute
  width: 0
  padding-left: 18px!important
  height: 31px
  font:
    size: 20px
  z-index: 4
  cursor: pointer
  background:
    size: contain
  top: 50%
  transform: translateY(-50%)
  background:
    repeat: no-repeat

.pre
  background:
    image: url("./all/prev-btn.png")
    repeat: no-repeat

.nxt
  background:
    image: url("./all/next-btn.png")

@media screen and (min-width: $bp-pc)
  .pre,.nxt
    display: none

@media screen and (max-width: $bp-mb)
  $lr: 2vw
  .box
    position: relative
    &:before, &:after
      position: absolute
      content: ""
      width: 15vw
      height: 100%
      z-index: 3
      top: 0
    &:before
      left: 0
      //background-image: linear-gradient(to right, rgba(0,74,119,.8), rgba(0,74,119,0))
    &:after
      //background-image: linear-gradient(to left, rgba(0,74,119,.8), rgba(0,74,119,0))
      right: 0
  .pre
    left: $lr

  .nxt
    right: $lr

// --------------------------------
// dot
$w: 10px
@media screen and (min-width: $bp-pc)
  .dot4
    display: flex
    height: 6px
    margin:
      top: 4vw
      bottom: 0 !important
    li
      border: solid 1px #fff
      width: 2vw
      position: relative
      cursor: pointer
      margin-right: .5vw
      &:last-child
        margin: 0
      &.active
        cursor: default
        background: #fff

@media screen and (max-width: $bp-mb)
  .dot4
    display: none
</style>

<script>
// @ is an alias to /src
import $ from 'jquery'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { isMobile } from '@/utils'

export default {
  name: 'section3',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      isMobile,
      vm: this,
      list: [
        '大都會公園空拍',
        '辰光橋實景拍攝',
        '大都會公園實景拍攝',
        '機捷A2站實景拍攝',
        // some
      ],
      swiperOption: {
        loop: true,
        breakpoints: {
          768: {
            spaceBetween: 10
          },
          0: {
            //slidesPerView: 0,
            spaceBetween: 14
          }
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        speed: 800,
        on: {
          slideChangeTransitionStart: function() {
            let eq = this.activeIndex
            if (!isMobile) {
              if (eq >= 2) {
                eq = eq - 2
              }
              $('.dot4 li')
                .removeClass('active')
                .eq(eq)
                .addClass('active')
            } else {
              if (eq >= 4) {
                eq = eq - 4
              }
              $('.dot4 li')
                .removeClass('active')
                .eq(eq)
                .addClass('active')
            }
          }
        }
      }
    }
  },

  methods: {
    prevBtn() {
      this.$refs.swiper4.$swiper.slidePrev()
    },
    nextBtn() {
      this.$refs.swiper4.$swiper.slideNext()
    },
    fnDotChange(i) {
      let eq = i - 1
      if (eq >= 2) {
        eq = eq - 2
      }
      this.$refs.swiper4.$swiper.slideTo(eq)
    },
    fnCCheck(i) {
      if (i === this.nCurrent) {
        this.bOn = !this.bOn
      } else {
        this.nCurrent = i
      }
    }
  },

  created() {},

  computed: {}
}
</script>
