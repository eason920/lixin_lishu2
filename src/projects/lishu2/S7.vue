<template>
  <div class="relative">
    <section id="sec7">
      <div
        v-if="isMobile"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-offset="0"
        class="pic"
      >
        <img src="./S7/title.png"/>
      </div>
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
        <div
          v-if="!isMobile"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
          class="pic"
        >
          <img src="./S7/title.png"/>
        </div>
        <!-- 1 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          新美齊物業 成就頂尖名宅尊貴血統
        </h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >建築門面形象源自頂奢豪宅管家物業，「新美齊物業」於民國111年榮獲優良公寓大廈評選No.1，將國外高端物業經驗與美學，導入台北市豪宅如Park259、Jade12…服務金字塔頂端與深具品味高資產客戶，除了未來社區首年免管理費的優質代管外、另外還提供免費30堂社區課程、及社區輕食Bar的服務將夢想中的生活藍圖，化為真實的幸福與感動，為【萊茵水花園】打造更勝星級旅店的貼心服務，不僅享受頂奢質感生活，更能提升建築資產價值。
        </p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >CNFlower團隊 升等居家美學品味</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >新東方花藝美學大師「CNFlower」凌宗湧，精準拿捏五感與空間層次的分際，屢獲國際政商名流、五星級酒店及精品品牌指定合作，【萊茵水花園】由「CNFlower」團隊，妝點端景與香氛，讓國際花藝綻放空間與人美感互動，回家進入舒心宜人的感官體驗，生活質感全面升級！
        </p>
        <!-- 3 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >B&B Italia頂級家俬 同步米蘭經典時尚</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >義大利國寶建築師Antonio Citterio、西班牙設計鬼才Patricia Urquiola、普利茲克建築師Zaha Hadid、日本設計大師深澤直人…全球最傑出的建築師、設計師、藝術家…跨界合作首選！
B&B義大利頂級家俬，以獨特的品質和永恆的優雅，成為豪宅空間中少不了的經典身影，【萊茵水花園】同步米蘭，回家品味大師經典！
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
.text
  width: 83vw
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
