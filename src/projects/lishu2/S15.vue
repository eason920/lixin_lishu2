<template>
  <div class="relative">
    <section id="sec15">
      <div class="box">
        <div class="canvas_box"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          <div class="pre" @click="prevBtn"></div>
          <div class="nxt" @click="nextBtn"></div>
          <swiper :options="swiperOption" ref="swiper15">
            <swiper-slide v-for="(item,i) in 9" :key="'s15' + i"></swiper-slide>
          </swiper>
        </div>
        <ul class="dot15" v-if="!isMobile">
          <li
            v-for="item in 9"
            :key="'dot15' + item"
            @click="fnDotChange(item)"
          ></li>
        </ul>
      </div>
      <div class="text">
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >千金難買早知道，水岸必買要知道！</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >關鍵：<br v-if="!isMobile" />
三重大都會水岸特區，<br v-if="isMobile"/>掌握「一高三捷三快四橋」利多關鍵，更勝大直水岸。<br />
遠見：<br v-if="!isMobile" />
水岸首排是置產關鍵，<br v-if="isMobile"/>預購搶下生活榮景是遠見，水岸第一排穩坐增值首席。<br /><br />
<span><b>新北首環，</b>河岸特區錢景同步台北</span>
<span><b>水岸首排，</b>僅8.6%可開發爭藏中</span>
<span><b>景觀契闊，</b>22米水漾路親水生態</span>
<span><b>席位稀臻，</b>對位大直水岸豪漲經驗</span>
<span><b>交通超順，</b>一高三捷三快四橋無敵</span>
<span><b>國門首圈，</b>2站直達台北雙星特區</span>
<span><b>團隊最強，</b>北環段TOD開發，Citylink</span>
<span><b>公園大景，</b>睥睨16座大安森林公園</span>
<span><b>增值首選，</b>重劃區起漲點首購必選</span>
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
              if (eq >= 9) {
                eq = eq - 9
              }
              $('.dot15 li')
                .removeClass('active')
                .eq(eq)
                .addClass('active')
            } else {
              if (eq >= 9) {
                eq = eq - 9
              }
              $('.dot15 li')
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
      this.$refs.swiper15.$swiper.slidePrev()
    },
    nextBtn() {
      this.$refs.swiper15.$swiper.slideNext()
    },
    fnDotChange(i) {
      let eq = i - 1
      if (eq >= 9) {
        eq = eq - 9
      }
      this.$refs.swiper15.$swiper.slideTo(eq)
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
#sec15
  display: flex
  color: #fff
  p
    text-align: justify
    span
      display: block
      padding-left: 0
      position: relative
      margin-bottom: -1.5em
      width: 16.5em
      &:after

        content: ""
        display: inline-block
        width: 10em
        height: 1em
      b
        font-weight: 300
        display: inline-block
h3
  text-align: left
  letter-spacing: 0.03em
  line-height: 1.35
  margin-bottom: 1.5em
  .en
    font-size: 2.78em
  img
    display: block
    width: 13em
    margin: .2em 0 0 0
    transform: scale3d(1,1,1.1)
.text
  width: 90vw
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
    width: 38vw
  .text
    border-left: solid 1px #fff
    width: 37vw
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
      font-size: 2.15em
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
  #sec15
    padding: 3vw 10vw 5vw

    h2
      text-align: left
      font:
        size: 1.5em
    p
      margin-top: 1.5vw
      & + h2
        margin-top: 2vw
      span
        display: block

  $g: 2vw
@media screen and (max-width: $bp-mb)
  #sec15
    flex-direction: column
    padding: 5vw 0
    h2
      span
        display: block
        text-align: center
    p
      margin: 3vw 0 12vw
      text-align: center
      span
        margin:0 auto -1.5em
        text-align: justify

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
  &:nth-child(1), &:nth-child(10)
    background-image: url('./S15/1.jpg')

  &:nth-child(2), &:nth-child(11)
    background-image: url('./S15/2.jpg')

  &:nth-child(3), &:nth-child(12)
    background-image: url('./S15/3.jpg')

  &:nth-child(4), &:nth-child(13)
    background-image: url('./S15/4.jpg')

  &:nth-child(5), &:nth-child(14)
    background-image: url('./S15/5.jpg')

  &:nth-child(6), &:nth-child(15)
    background-image: url('./S15/6.jpg')

  &:nth-child(7), &:nth-child(16)
    background-image: url('./S15/7.jpg')

  &:nth-child(8), &:nth-child(17)
    background-image: url('./S15/8.jpg')

  &:nth-child(9), &:nth-child(18)
    background-image: url('./S15/9.jpg')

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
    height: 75.5vw // w * 2.87

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
  .dot15
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
  .dot15
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
