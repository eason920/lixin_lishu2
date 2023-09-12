<template>
  <div class="relative">
    <section id="sec9">
      <div class="box">
        <div class="canvas_box"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          <div v-if="!isMobile">
            <swiper v-if="isPcAnimate" :options="swiperOption" ref="swiper9">
              <swiper-slide v-for="(item,i) in list" :key="'s9' + i">
                <div v-if="isMobile" class="msg">{{ item }}</div>
              </swiper-slide>
            </swiper>
            <img v-else class="pcpic" src="./S9/1.png" />
          </div>
          <swiper v-else :options="swiperOption" ref="swiper9">
            <swiper-slide v-for="(item,i) in list" :key="'s9' + i">
              <div v-if="isMobile" class="msg">{{ item }}</div>
            </swiper-slide>
          </swiper>
        </div>
        <ul v-if="isPcAnimate" class="dot9">
          <li
            v-for="item in 2"
            :key="'dot9' + item"
            @click="fnDotChange(item)"
          ></li>
        </ul>
      </div>
      <div class="text">
        <h3
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
          v-if="!isMobile"><span class="en">STUCTURAL SAFETY</span>
          <img loading="lazy" src="./S1/logo.png" /></h3>
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >結構堅若磐石 品質沈穩耐候</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >
        超越建築法規要求，以蓋超高樓層建築相同之嚴謹，透過第三方公正單位把關，以使用者的態度蓋房子，精密隔熱砂漿工法，恆久節能有效降低室內溫度，5年防水保固，細節藏在每個方寸裡的用心。

        </p>
      </div>
    </section>
  </div>
</template>

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
      isPcAnimate: false,
      list: [
        '防水保固示意圖',
        '結構工學示意圖'
      ],
      bAddClass1: false,
      bAddClass2: false,
      isMobile,
      vm: this,
      swiperOption: {
        loop: true,
        breakpoints: {
          // pc
          768: {
            // slidesPerView: 1.16,
            spaceBetween: 10
          },
          // mb
          0: {
            slidesPerView: 1.16,
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
              $('.dot9 li')
                .removeClass('active')
                .eq(eq)
                .addClass('active')
            } else {
              if (eq >= 2) {
                eq = eq - 2
              }
              $('.dot9 li')
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
      this.$refs.swiper9.$swiper.slidePrev()
    },
    nextBtn() {
      this.$refs.swiper9.$swiper.slideNext()
    },
    fnDotChange(i) {
      let eq = i - 1
      if (eq >= 2) {
        eq = eq - 2
      }
      this.$refs.swiper9.$swiper.slideTo(eq)
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

<style lang="sass" scoped>
@import src/assets/style/myvar

$g: 5px
#sec9
  display: flex
  color: #fff
h3
  text-align: left
  letter-spacing: 0.03em
  line-height: 1.35
  margin-bottom: 1.5em
  .en
    font-size: 2.2em
  img
    display: block
    width: 13em
    margin: .2em 0 0 0
    transform: scale3d(1,1,1.1)
.text
  width: 87vw
  margin: 0 auto
  color: #fff
  .pic
    width: 18vw
    margin-bottom: 2vw
    img
      width: 100%
  h2
    color: $yellow

.box
  font-size: 0
  // overflow: hidden

@media screen and (min-width: $bp-pc)
  .box
    position: relative
    width: 37vw
  .text
    border-left: solid 1px #fff
    width: 35vw
    padding:
      left: 3vw
    display: flex
    flex-direction: column
    justify-content: center

@media screen and (max-width: $bp-mb)
  .box
    position: relative
    margin-bottom: 7vw

  .pic
    width: 45vw
    margin:
      left: 5vw
      bottom: 5vw
    img
      width: 100%
  h3
    margin:
      left: 5vw
      bottom: 5vw
    .en
      font-size: 2em
    img
      width: 10.2em

// ====================================
// == CANVAS
// ====================================
@mixin effect
  // border-radius: 3px
  overflow: hidden
  position: relative
  img
    width: 100%
    &.float
      position: absolute
      left: 0
      top: 0
      transform: scale(0)
      opacity: 0
      transform-origin: 50% 0
      &.ani
        animation: ani .7s linear forwards
.canvas
  font-size: 0
  width: 100%
  div
    width: calc( 25% - #{$g})
    display: inline-block
    margin:
      right: $g
      bottom: $g
    &:nth-child(4n)
      margin-right: 0
    @include effect
@keyframes ani
  from
    transform: scale(0)
    opacity: 0
  to
    transform: scale(1)
    opacity: 1
@media screen and (min-width: $bp-pc)
  #sec9
    padding: 3vw 10vw 5vw

    h2
      text-align: left
    p
      margin-top: 1.5vw
      text-align: justify
      & + h2
        margin-top: 2vw
      span
        display: block

  $g: 2vw
@media screen and (max-width: $bp-mb)
  #sec9
    flex-direction: column
    padding: 5vw 0
    p
      margin: 3vw 0 12vw
      span
        display: block
        text-align: center
  .canvas0, .canvas
    margin-bottom: 12vw

// --------------------------------
// -- SWITCH
// --------------------------------
.canvas_box
  font-size: 0
  overflow: hidden

@media screen and (min-width: $bp-pc)
  .canvas_box
    width: 37vw
  .pcpic
    width: 100%

@media screen and (max-width: $bp-mb)
  .canvas_box
    position: relative

// ====================================
// == SWIPER W/H
// ====================================
.swiper-slide
  background:
    position: 0 0
    size: contain
  position: relative
  background-repeat: no-repeat
.swiper-container
  z-index: 2
@media screen and (min-width: $bp-pc)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 38.3vw // w * 0.562

  // w
  .swiper-container
    width:  100%

@media screen and (max-width: $bp-mb)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 45.3vw // w * 2.87

  // w
  .swiper-container
    padding-left: 11.5vw
    // width: 80vw

  .swiper-slide
    &:nth-child(1), &:nth-child(3), &:nth-child(5), &:nth-child(7)
      background-image: url('./S9/m1.jpg')

    &:nth-child(2), &:nth-child(4), &:nth-child(6), &:nth-child(8)
      background-image: url('./S9/m2.jpg')

  // gurter
  .canvas_box
    position: relative
    & > div
      //padding-left: calc( (100vw - 83vw) / 2 + 14px)

// --------------------------------
// PRE NEX
.canvas_box
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
  .canvas_box
    position: relative
  .pre,.nxt
    display: none

@media screen and (max-width: $bp-mb)
  $lr: 2vw
  .canvas_box
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
  .pre,.nxt
    display: none

// --------------------------------
// dot
$w: 10px
@media screen and (min-width: $bp-pc)
  .dot9
    display: none
    position: absolute
    z-index: 99
    bottom: -15px
    left: 50%
    // left: 1vw
    transform: translateX(-50%)
    display: flex
    height: 6px
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
  .dot9
    display: none

// ====================================
// == msg
// ====================================
.msg
  position: absolute
  right: 0.5em
  bottom: 0.5em
  color: #fff
  font-size: 12px
  text-shadow: 0 0 12px #000, 0 0 5px #000
  text-align: right
@media screen and (max-width: $bp-mb)
  .msg
    font-size: 8px

</style>
