<template>
  <div class="relative">
    <section id="sec3">
      <div class="box">
        <div class="canvas_box"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          <div class="pre" @click="prevBtn"></div>
          <div class="nxt" @click="nextBtn"></div>
          <swiper :options="swiperOption" ref="swiper3">
            <swiper-slide v-for="(item, i) in list" :key="'s3' + i">
              <div class="gradient"></div>
              <div class="msg">{{ item }}</div>
            </swiper-slide>
          </swiper>
          <ul class="dot3" v-if="!isMobile">
            <li
              v-for="item in 3"
              :key="'dot3' + item"
              @click="fnDotChange(item)"
            ></li>
          </ul>
        </div>
        <div class="box_canvas">
          <div class="canvas">
            <div><img src="./S3/empty.png" /><div class="float group1" :class="[{ani: bAddClass1}]"></div></div>
            <div><img src="./S3/empty.png" /><div class="float group1" :class="[{ani: bAddClass1}]"></div></div>
            <div><img src="./S3/empty.png" /><div class="float group1" :class="[{ani: bAddClass1}]"></div></div>
            <div><img src="./S3/empty.png" /><div class="float group1" :class="[{ani: bAddClass1}]"></div></div>
            <!---->
            <div><img src="./S3/empty.png" /><div class="float group2" :class="[{ani: bAddClass2}]"></div></div>
            <div><img src="./S3/empty.png" /><div class="float group2" :class="[{ani: bAddClass2}]"></div></div>
            <div><img src="./S3/empty.png" /><div class="float group2" :class="[{ani: bAddClass2}]"></div></div>
            <div><img src="./S3/empty.png" /><div class="float group2" :class="[{ani: bAddClass2}]"></div></div>
          </div>
        </div>
      </div>
      <div class="text">
        <h3
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
          v-if="!isMobile"><span class="en">NEW TAIPEI<br />
METROPOLITAN PARK</span>
          <img loading="lazy" src="./S1/logo.png" /></h3>
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >新北大都會公園 萊茵水花園的生活庭院</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          總面積424公頃，相當於16座大安森林公園，<br />
          比美國紐約市中央公園大1.25倍，<br />
          萬坪綠海綿延、7座生態景觀公園、10大景觀特色，<br />
          68座多功能運動場地、24公里環狀自行車步道、<br />
          世界最大共融性堤坡樂園孩子嗨翻天， <br />
          河岸景觀、自然生態、四季花海，微風鳥群…<br />
          適合全家大小一起同樂，新北健康樂活首選
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
      bAddClass1: false,
      bAddClass2: false,
      isMobile,
      vm: this,
      list: [
        '新北大都會公園實景拍攝',
        '新北大都會公園實景拍攝',
        '新北大都會公園實景拍攝'
        // some
      ],
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
              if (eq >= 3) {
                eq = eq - 3
              }
              $('.dot3 li')
                .removeClass('active')
                .eq(eq)
                .addClass('active')
            } else {
              if (eq >= 3) {
                eq = eq - 3
              }
              $('.dot3 li')
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
      this.$refs.swiper3.$swiper.slidePrev()
    },
    nextBtn() {
      this.$refs.swiper3.$swiper.slideNext()
    },
    fnDotChange(i) {
      let eq = i - 1
      if (eq >= 3) {
        eq = eq - 3
      }
      this.$refs.swiper3.$swiper.slideTo(eq)
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

  mounted() {
    const target1 = $('.group1')
    const target2 = $('.group2')
    let offset1 = 0
    let offset2 = 0
    let offset3 = 0
    let offset4 = 0
    setTimeout(() => {
      offset1 = target1.offset().top
      offset2 = target2.offset().top
      action()
    }, 3000)
    const action = () => {
      const scrollTop = $(window).scrollTop() + $(window).height() - 50
      this.bAddClass1 = scrollTop >= offset1
      this.bAddClass2 = scrollTop >= offset2
      this.bAddClass3 = scrollTop >= offset3
      this.bAddClass4 = scrollTop >= offset4
    }
    $(window).scroll(() => {
      action()
    })
  },

  computed: {}
}
</script>

<style lang="sass" scoped>
@import src/assets/style/myvar

$g: 5px
#sec3
  display: flex
  color: #fff
.text
  position: relative
  width: 80vw
  margin: 0 auto
  color: #fff
  .pic
    width: 25vw
    margin-bottom: 3vw
    img
      width: 100%
  h3
    text-align: left
    letter-spacing: 0.03em
    line-height: 1.35
    margin-bottom: 1.5em
    .en
      font-size: 2em
    img
      display: block
      width: 13em
      margin: .2em 0 0 0
      transform: scale3d(1,1,1.1)
  h2
    color: $yellow
.box
  font-size: 0
  overflow: hidden

@media screen and (min-width: $bp-pc)
  .box
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

  .pic
    display: none

// ====================================
// == CANVAS
// ====================================
@mixin effect
  // border-radius: 3px
  overflow: hidden
  position: relative
  img
    width: 100%
  .float
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
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
    &:nth-child(1)
      > .float
        background:
          image: url('./S3/img1.jpg')
          position: 0 0
          size: 200% auto
    &:nth-child(2)
      > .float
        background:
          image: url('./S3/img1.jpg')
          position: 100% 0
          size: 200% auto
    &:nth-child(3)
      > .float
        background:
          image: url('./S3/img2.jpg')
          position: 0 0
          size: cover
    &:nth-child(4)
      > .float
        background:
          image: url('./S3/img3.jpg')
          position: 0 0
          size: cover
    &:nth-child(5)
      > .float
        background:
          image: url('./S3/img1.jpg')
          position: 0 100%
          size: 200% auto
    &:nth-child(6)
      > .float
        background:
          image: url('./S3/img1.jpg')
          position: 100% 100%
          size: 200% auto
    &:nth-child(7)
      > .float
        background:
          image: url('./S3/img4.jpg')
          position: 0 0
          size: auto 100%
    &:nth-child(8)
      > .float
        background:
          image: url('./S3/img4.jpg')
          position: 100% 0
          size: auto 100%
    
    @include effect
@keyframes ani
  from
    transform: scale(0)
    opacity: 0
  to
    transform: scale(1)
    opacity: 1
@media screen and (min-width: $bp-pc)
  #sec3
    padding: 3vw 10vw 5vw

    h2
      text-align: left
    p
      margin: 1.5vw 0 5vw
      text-align: justify

  $g: 2vw
  .box_canvas
    order: 1
    width: 100%
    padding-top: 2vw
@media screen and (max-width: $bp-mb)
  #sec3
    flex-direction: column
    padding: 5vw 0
    h2
      span
        display: block
        text-align: center
    p
      margin: 3vw 0 12vw
  .canvas0, .canvas
    margin-bottom: 12vw

  .box_canvas
    margin: 5vw 11vw 0

// --------------------------------
// -- SWITCH
// --------------------------------
.canvas_box
  font-size: 0
  overflow: hidden

@media screen and (min-width: $bp-pc)
  .canvas_box
    width: 37vw

@media screen and (max-width: $bp-mb)
  .canvas_box
    position: relative

// ====================================
// == SWIPER W/H
// ====================================
.swiper-slide
  background:
    position: 0 0
    size: cover
  position: relative
  background-repeat: no-repeat
  &:nth-child(1), &:nth-child(4), &:nth-child(7), &:nth-child(10)
    background-image: url('./S3/1.jpg')

  &:nth-child(2), &:nth-child(5), &:nth-child(8), &:nth-child(11)
    background-image: url('./S3/2.jpg')

  &:nth-child(3), &:nth-child(6), &:nth-child(9), &:nth-child(12)
    background-image: url('./S3/3.jpg')
.swiper-container
  z-index: 2
@media screen and (min-width: $bp-pc)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 19.3vw // w * 0.562

  // w
  .swiper-container
    width:  100%

@media screen and (max-width: $bp-mb)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 39.9vw // w * 2.87

  // w
  .swiper-container
    padding-left: 11.5vw
    // width: 80vw

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
  .dot3
    position: absolute
    z-index: 99
    bottom: 15px
    left: 50%
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
  .dot3
    display: none

// ====================================
// == msg
// ====================================
.gradient
  position: absolute
  width: 100%
  height: 80px
  bottom: 0
  background-image: linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0))

.msg
  position: absolute
  right: 0.5em
  bottom: 0.5em
  color: #fff
  font-size: 12px
  text-align: right
@media screen and (max-width: $bp-mb)
  .msg
    font-size: 8px

</style>
