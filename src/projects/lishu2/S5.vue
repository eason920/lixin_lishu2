<template>
  <div class="relative">
    <section id="sec5">
      <div class="box">
        <div class="canvas_box"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          <div class="pre" @click="prevBtn"></div>
          <div class="nxt" @click="nextBtn"></div>
          <swiper :options="swiperOption" ref="swiper5">
            <swiper-slide v-for="(item,i) in list" :key="'s5' + i">
              <div class="gradient"></div>
              <div class="msg">{{ item }}</div>
            </swiper-slide>
          </swiper>
          <ul class="dot5" v-if="!isMobile">
            <li
              v-for="item in 3"
              :key="'dot5' + item"
              @click="fnDotChange(item)"
            ></li>
          </ul>
        </div>
        <div class="static"
        data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          <div>
            <img src="./S5/21.jpg" />
            <div class="gradient"></div>
            <div class="msg">新北環快</div>
          </div>
          <div>
            <img src="./S5/22.jpg" />
            <div class="gradient"></div>
            <div class="msg">機場捷運A2a站示意圖</div>
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
          v-if="!isMobile"><span class="en">Transit<br />
Oriented Development</span>
          <img loading="lazy" src="./S1/logo.png" /></h3>
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >雙北最強交通路網 雙捷加速增值在線</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          【萊茵水花園】位於正疏洪東路上，3分鐘速達捷運A2三重站、5分鐘直上中山高，<br />
          中興橋、忠孝橋及台北橋，僅需6~9分鐘的車程，台64線、新北環快、七大聯外橋樑縱橫雙北，<br />
          未來機場捷運A2a站，共榮台北雙星國門盛世，興建中捷運北環段Y19b站，串連士林大直國際脈動，<br />
          穩坐新北第一圈最新最優質的水岸新都心。
        </p>
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >新北政府重金打造 三重水岸新區翻轉起飛</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >未來三重水岸新區透過「TOD都市發展計劃」，<br />
        環狀線北環段Y19b捷運用地，一如東京品川車站，<br />
        活化區域改變地貌，創造優質環境；北台灣最大果菜市場轉型文化都心，<br />
        打造兼具國際觀光與文藝機能的「綠藝之丘」，<br />
        【萊茵水花園】首蒙其利，提前豐收新三重未來盛世！
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
        '東京品川車站',
        '東京六本木之丘｜TOD世界鼻祖國際城市',
        '東京六本木之丘｜TOD世界鼻祖國際城市'
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
              $('.dot5 li')
                .removeClass('active')
                .eq(eq)
                .addClass('active')
            } else {
              if (eq >= 3) {
                eq = eq - 3
              }
              $('.dot5 li')
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
      this.$refs.swiper5.$swiper.slidePrev()
    },
    nextBtn() {
      this.$refs.swiper5.$swiper.slideNext()
    },
    fnDotChange(i) {
      let eq = i - 1
      if (eq >= 3) {
        eq = eq - 3
      }
      this.$refs.swiper5.$swiper.slideTo(eq)
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
#sec5
  display: flex
  color: #fff
.text
  width: 80vw
  margin: 0 auto
  color: #fff
  .pic
    width: 25vw
    margin-bottom: 2vw
    img
      width: 100%
  h3
    text-align: left
    letter-spacing: 0.03em
    line-height: 1.35
    margin-bottom: 1.5em
    .en
      font-size: 1.83em
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
  #sec5
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
  #sec5
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
    size: contain
  position: relative
  background-repeat: no-repeat
  &:nth-child(1), &:nth-child(4), &:nth-child(7), &:nth-child(10)
    background-image: url('./S5/3.jpg')

  &:nth-child(2), &:nth-child(5), &:nth-child(8), &:nth-child(11)
    background-image: url('./S5/1.jpg')

  &:nth-child(3), &:nth-child(6), &:nth-child(9), &:nth-child(12)
    background-image: url('./S5/2.jpg')
.swiper-container
  z-index: 2
@media screen and (min-width: $bp-pc)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 24.65vw // w * 0.562

  // w
  .swiper-container
    width:  100%

@media screen and (max-width: $bp-mb)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 50.8vw // w * 2.87

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
  .dot5
    position: absolute
    z-index: 99
    bottom: 15px
    // left: 50%
    left: 1vw
    // transform: translateX(-50%)
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
  .dot5
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

// ====================================
// == STATIC PIC BOX
// ====================================
.static
  display: flex
  justify-content: space-between
  margin-top: 8px
  & > div
    position: relative
    &:nth-child(1)
      width: calc(100%/6*4 - 4px)
    &:nth-child(2)
      width: calc(100%/6*2 - 4px)
    img
      width: 100%
      height: 100%
      object-fit: cover

@media screen and (max-width: $bp-mb)
  .static
    width: 76vw
    margin:
      left: 12vw
      bottom: 7vw
</style>
