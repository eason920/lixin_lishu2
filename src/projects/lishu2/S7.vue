<template>
  <div class="relative">
    <section id="sec7">
      <div class="box">
        <div class="canvas_box"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          <div class="pre" @click="prevBtn"></div>
          <div class="nxt" @click="nextBtn"></div>
          <swiper :options="swiperOption" ref="swiper7">
            <swiper-slide v-for="(item,i) in 3" :key="'s7' + i"></swiper-slide>
          </swiper>
          <ul class="dot7" v-if="!isMobile">
            <li
              v-for="item in 3"
              :key="'dot7' + item"
              @click="fnDotChange(item)"
            ></li>
          </ul>
        </div>
      </div>
      <div class="text">
        <h3 v-if="!isMobile"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"><span class="en">AESTHETIC LIFE</span>
          <img loading="lazy" src="./S7/logo.png" /></h3>
        <!-- 1 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >
        新美齊物業 北市豪門管家DNA
        </h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >民國111年榮獲優良公寓大廈評選No.1，將國外高端物業管理經驗導入台北市豪宅，如Park259、Jade12等，專伺金字塔高端客戶，本社區獨享首年三項免費：物管、30堂社區課程、輕食Bar等服務，為【萊茵水花園】的主人打造星級旅店服務，真正的奢華，在您走進家門即刻享有的主動細節裡。

        </p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >CNFlower團隊 升等美學品味</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >新東方花藝美學大師「CNFlower」凌宗湧，屢獲國際政商名流、五星級酒店及精品品牌指定合作，在廊道有驚豔的端景，在不經意的轉角聞到香氛。讓五感走進空間，生活質感全面升等！
        </p>
        <!-- 3 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >B&B Italia頂級家俬 同步米蘭時尚</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >普利茲克建築師Zaha Hadid、日本設計大師深澤直人 建築師、設計師與藝術家跨界合作首選！ B&B義大利頂級家俬，品質堅實耐久，型體經典優雅，【萊茵水花園】同步米蘭，回家品味大師經典！
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
              $('.dot7 li')
                .removeClass('active')
                .eq(eq)
                .addClass('active')
            } else {
              if (eq >= 3) {
                eq = eq - 3
              }
              $('.dot7 li')
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
      this.$refs.swiper7.$swiper.slidePrev()
    },
    nextBtn() {
      this.$refs.swiper7.$swiper.slideNext()
    },
    fnDotChange(i) {
      let eq = i - 1
      if (eq >= 3) {
        eq = eq - 3
      }
      this.$refs.swiper7.$swiper.slideTo(eq)
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
#sec7
  display: flex
  align-items: center
  color: #fff
h3
  text-align: left
  letter-spacing: 0.03em
  line-height: 1.35
  margin-bottom: 1.5em
  .en
    font-size: 2.5em
  img
    display: block
    width: 20em
    margin: .2em 0 0 0
    transform: scale3d(1,1,1.1)
.text
  width: 78vw
  margin: 0 auto
  color: #fff
  .pic
    width: 18vw
    margin-bottom: 1vw
    font-size: 0
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
    margin: 0
    margin-left: 3.5vw
    border-left: solid 1px #fff
    width: 39vw
    padding:
      left: 3.5vw
    display: flex
    flex-direction: column
    justify-content: center

@media screen and (max-width: $bp-mb)
  #sec7
    align-items: flex-start
  .box
    position: relative
    width: 100%
    margin-bottom: 7vw

  .pic
    width: 45vw
    margin:
      left: 5vw
      bottom: 4vw
    img
      width: 100%

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
  #sec7
    padding: 3vw 10vw 5vw

    h2
      text-align: left
    p
      margin-top: 1vw
      text-align: justify
      & + h2
        margin-top: 1vw
      span
        display: block

  $g: 2vw
@media screen and (max-width: $bp-mb)
  #sec7
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
  // overflow: hidden

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
    background-image: url('./S7/3.png')

  &:nth-child(2), &:nth-child(5), &:nth-child(8), &:nth-child(11)
    background-image: url('./S7/1.png')

  &:nth-child(3), &:nth-child(6), &:nth-child(9), &:nth-child(12)
    background-image: url('./S7/2.png')
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

  .swiper-slide
    &:nth-child(1), &:nth-child(4), &:nth-child(7), &:nth-child(10)
      background-image: url('./S7/3.png')

    &:nth-child(2), &:nth-child(5), &:nth-child(8), &:nth-child(11)
      background-image: url('./S7/1.png')

    &:nth-child(3), &:nth-child(6), &:nth-child(9), &:nth-child(12)
      background-image: url('./S7/2.png')

@media screen and (max-width: $bp-mb)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 52.3vw // w * 2.87

  // w
  .swiper-container
    padding-left: 11.5vw
    // width: 80vw

  .swiper-slide
    &:nth-child(1), &:nth-child(4), &:nth-child(7), &:nth-child(10)
      background-image: url('./S7/m1.png')

    &:nth-child(2), &:nth-child(5), &:nth-child(8), &:nth-child(11)
      background-image: url('./S7/m2.png')

    &:nth-child(3), &:nth-child(6), &:nth-child(9), &:nth-child(12)
      background-image: url('./S7/m3.png')

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
  .dot7
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
  .dot7
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
  right: 10px
  bottom: 10px
  color: #fff
  font-size: 12px
  text-align: right

</style>
