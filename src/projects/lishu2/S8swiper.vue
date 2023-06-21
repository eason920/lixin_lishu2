<template>
<div class="box"
  data-aos-once="false"
  data-aos="fade-up"
  data-aos-delay="0"
  data-aos-duration="800"
>
    <div class="pre" @click="prevBtn"></div>
    <div class="nxt" @click="nextBtn"></div>
    <swiper :options="swiperOption" ref="swiper8">
      <swiper-slide v-for="(item, i) in list" :key="'s8' + i">
        <div class="msg">{{ item }}</div>
      </swiper-slide>
    </swiper>
    <ul class="dot8" v-if="!isMobile">
        <li
          v-for="item in 3"
          :key="'dot8' + item"
          @click="fnDotChange(item)"
        ></li>
      </ul>
</div>
</template>

<script>
import $ from 'jquery'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { isMobile, isTablet } from '@/utils'

export default {
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      list: [
        '外觀合成示意圖',
        '外觀合成示意圖',
        '外觀合成示意圖',
        // some
      ],
      vm: this,
      isMobile,
      swiperOption: {
        loop: true,
        breakpoints: {
          768: {
            slidesPerView: 1.3,
            spaceBetween: 40
          },
          0: {
            slidesPerView: 1.16,
            spaceBetween: 10
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
            if (eq >= 3) {
              eq = eq - 3
            }
            $('.dot8 li')
              .removeClass('active')
              .eq(eq)
              .addClass('active')
          }
        }
      }
    }
  },

  methods: {
    prevBtn() {
      this.$refs.swiper8.$swiper.slidePrev()
    },
    nextBtn() {
      this.$refs.swiper8.$swiper.slideNext()
    },
    fnDotChange(i) {
      let eq = i - 1
      if (eq >= 3) {
        eq = eq - 3
      }
      this.$refs.swiper8.$swiper.slideTo(eq)
    }
  },

};
</script>

<style lang='sass' scoped>
@import "src/assets/style/myvar"
// ====================================
// == SWIPER v
// ====================================

// 圖片
.swiper-slide
  background:
    position: 0 0
    size: contain
  position: relative

@media screen and (min-width: $bp-pc)
  .swiper-slide
    background-repeat: no-repeat
    &:nth-child(1), &:nth-child(4), &:nth-child(7)
      background-image: url('./S8/1.jpg')

    &:nth-child(2), &:nth-child(5), &:nth-child(8)
      background-image: url('./S8/2.jpg')

    &:nth-child(3), &:nth-child(6), &:nth-child(9)
      background-image: url('./S8/3.jpg')

@media screen and (max-width: $bp-mb)
  .swiper-slide
    background-repeat: no-repeat
    &:nth-child(1), &:nth-child(4), &:nth-child(7)
      background-image: url('./S8/1.jpg')

    &:nth-child(2), &:nth-child(5), &:nth-child(8)
      background-image: url('./S8/2.jpg')

    &:nth-child(3), &:nth-child(6), &:nth-child(9)
      background-image: url('./S8/3.jpg')

// ====================================
// == SWIPER W/H
// ====================================
.swiper-container
  z-index: 2
@media screen and (min-width: $bp-pc)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 31.5vw // w * 0.562

  // w
  .swiper-container
    // width:  100%

  // gurter
  .box
    position: relative
    & > div
      padding-left: calc( (100vw - 70vw) / 2 + 20px )

@media screen and (max-width: $bp-mb)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 39.5vw // w * 2.87
    padding-left: 10.5vw

  // w
  .swiper-container
    // width: 80vw

// --------------------------------
// PRE NEX
.box
  position: relative

.pre, .nxt
  display: block
  display: none
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

// ====================================
// == msg
// ====================================
.msg
  position: absolute
  right: 2.5vw
  bottom: 10px
  color: #fff
  font-size: 12px
  text-shadow: 0 0 12px #000, 0 0 5px #000




// ====================================
// == BOX
// ====================================
.box
  font-size: 0
  // overflow: hidden

  @media screen and (max-width: $bp-mb)
  // gurter
  .box
    position: relative
    & > div
      //padding-left: calc( (100vw - 83vw) / 2 + 14px)


// --------------------------------
// dot
$w: 10px
@media screen and (min-width: $bp-pc)
  .dot8
    display: flex
    height: 6px
    position: absolute
    left: 50%
    transform: translateX(-50%)
    bottom: -1vw
    z-index: 9
    li
      border: solid 1px #fff
      width: 2vw
      cursor: pointer
      margin-right: .5vw
      &:last-child
        margin: 0
      &.active
        cursor: default
        background: #fff

@media screen and (max-width: $bp-mb)
  .dot8
    display: none


</style>
