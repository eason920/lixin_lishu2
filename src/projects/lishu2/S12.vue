<template>
  <div class="relative">
    <section id="sec12">
      <div class="box">
        <div class="canvas_box"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          <div class="pre" @click="prevBtn"></div>
          <div class="nxt" @click="nextBtn"></div>
          <swiper :options="swiperOption" ref="swiper12">
            <swiper-slide v-for="(item,i) in 8" :key="'s12' + i"></swiper-slide>
          </swiper>
          <ul class="dot12" v-if="!isMobile">
            <li
              v-for="item in 8"
              :key="'dot12' + item"
              @click="fnDotChange(item)"
            ></li>
          </ul>
        </div>
      </div>
      <div class="text">
        <!-- 1 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >
        「進化型水岸宅」重新定義 新世代水岸建築價值s
        </h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >
        大景當前，視野的寬度，決定資產的高度，唯有穩坐水岸第一排，增值前景方能無人可敵，【萊茵水花園】樹立同區位同級產品，難以超越的標竿。
定錨水岸第一排真價值！
        </p>
        <!-- 2 -->
        <h2
          class="customH2"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          <span>質感高不用代價高</span>
          <span class="is_2">「進化型水岸宅」<b></b>大制霸關鍵勝出</span>
        </h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >
        制定水岸建築高規格標準，超越同級為理想而生！<br />
置產需有遠見，必要8大關鍵：<br />
<span><b>1.水岸第一排：</b>重劃區中心，看見增值核心</span>
<span><b>2.捷運穩增值：</b>A2a預定站，步行約3分鐘</span>
<span><b>3.戶戶高品質：</b>社區規劃以人為本，純質寧靜</span>
<span><b>4.大師級地景：</b>陳麗珍＆高仲廷 建築師作品</span>
<span><b>5.豪門級物管：</b>名邸管家新美齊，首年享免費</span>
<span><b>6.風格雕塑家：</b>CNFlower以極簡豐釀空間美</span>
<span><b>7.傢俬品奢華：</b>B&B Italia時尚品牌同步米蘭</span>
<span><b>8.頭等艙建材：</b>建材配備全面升級，優化生活</span>
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
  name: 'section12',
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
              if (eq >= 8) {
                eq = eq - 8
              }
              $('.dot12 li')
                .removeClass('active')
                .eq(eq)
                .addClass('active')
            } else {
              if (eq >= 8) {
                eq = eq - 8
              }
              $('.dot12 li')
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
      this.$refs.swiper12.$swiper.slidePrev()
    },
    nextBtn() {
      this.$refs.swiper12.$swiper.slideNext()
    },
    fnDotChange(i) {
      let eq = i - 1
      if (eq >= 8) {
        eq = eq - 8
      }
      this.$refs.swiper12.$swiper.slideTo(eq)
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
#sec12
  display: flex
  align-items: center
  color: #fff
  p
    text-align: justify
    span
      display: block
      padding-left: 0
      position: relative
      margin-bottom: -1.5em
      width: 20em
      &:after

        content: ""
        display: inline-block
        width: 10em
        height: 1em
      b
        font-weight: 300
        display: inline-block
.text
  width: 90vw
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
  #sec12
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
  #sec12
    padding: 3vw 10vw 5vw

    h2
      text-align: left
    p
      margin-top: 1vw
      text-align: justify
      & + h2
        margin-top: 3vw
      span
        display: block

  $g: 2vw
@media screen and (max-width: $bp-mb)
  #sec12
    flex-direction: column
    padding: 5vw 0
    p
      margin: 3vw 0 12vw
      text-align: center
      span
        margin:0 auto -1.5em
        text-align: justify

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
  &:nth-child(1), &:nth-child(9),&:nth-child(17),&:nth-child(25),&:nth-child(33),&:nth-child(41),&:nth-child(49),&:nth-child(57)
    background-image: url('./S12/1.jpg')

  &:nth-child(2), &:nth-child(10),&:nth-child(18),&:nth-child(26),&:nth-child(34),&:nth-child(42),&:nth-child(50),&:nth-child(58)
    background-image: url('./S12/2.jpg')

  &:nth-child(3), &:nth-child(11),&:nth-child(19),&:nth-child(27),&:nth-child(35),&:nth-child(43),&:nth-child(51),&:nth-child(59)
    background-image: url('./S12/3.jpg')

  &:nth-child(4), &:nth-child(12),&:nth-child(20),&:nth-child(28),&:nth-child(36),&:nth-child(44),&:nth-child(52),&:nth-child(60)
    background-image: url('./S12/4.jpg')

  &:nth-child(5), &:nth-child(13),&:nth-child(21),&:nth-child(29),&:nth-child(37),&:nth-child(45),&:nth-child(53),&:nth-child(61)
    background-image: url('./S12/5.jpg')

  &:nth-child(6), &:nth-child(14),&:nth-child(22),&:nth-child(30),&:nth-child(38),&:nth-child(46),&:nth-child(54),&:nth-child(62)
    background-image: url('./S12/6.jpg')

  &:nth-child(7), &:nth-child(15),&:nth-child(23),&:nth-child(31),&:nth-child(39),&:nth-child(47),&:nth-child(55),&:nth-child(63)
    background-image: url('./S12/7.jpg')

  &:nth-child(8), &:nth-child(16),&:nth-child(24),&:nth-child(32),&:nth-child(40),&:nth-child(48),&:nth-child(56),&:nth-child(64)
    background-image: url('./S12/8.jpg')
.swiper-container
  z-index: 2
@media screen and (min-width: $bp-pc)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 37.9vw // w * 0.562

  // w
  .swiper-container
    width:  100%
@media screen and (max-width: $bp-mb)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 75.8vw // w * 2.87

  // w
  .swiper-container
    padding-left: 11.5vw

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
  .dot12
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
  .dot12
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

// ====================================
// == CUSTOM
// ====================================
.customH2
  span
    display: block
    b
      position: relative
      display: inline-block
      &:after
        content: '8'
        position: absolute


@media screen and (min-width: $bp-pc)
  .customH2
    span
      &.is_2
        // padding-left: 10px
      b
        width: 60px
        &:after
          content: '8'
          font-size: 78px
          bottom: -36px
          left: 10px

@media screen and (max-width: $bp-mb)
  .customH2
    font-size: 18px
    span
      &.is_2
        margin-top: 10px
        b
          width: 28px
          &:after
            font-size: 40px
            bottom: -20px
            left: 0
    & + div
      margin-top: 12px
</style>
