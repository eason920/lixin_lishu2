<template>
  <div class="relative sec4">
    <section id="sec4">
      <div class="box"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >
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
      <div class="text">
        <h1
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >大都會水岸特區</h1>
        <br>

        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >對位大直水岸 越超大安森林</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >奢綠開闊的公園水岸，總是迷人！<br>雙北唯一擁有綠地、水岸與雙捷運的特區，「大都會水岸特區」公園，宛如一筆畫境層層展開，水岸，河堤打造多達100種遊樂設施，成為健康自然的親子樂園，出門講究效率速度，回家追求景觀樂活，讓新世代的美好三重，由此出發！
        </p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >臺北雙星領銜 新北三大核心共榮<br>關鍵地位輕取大未來</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >「大都會水岸特區」環擁雙北國家級重磅建設，東以一橋之距與臺北雙星特區共好共榮，跨步南向新北第二行政中心，打造三重新市政特區，串聯西側新北產業園區以及新莊副都心，繁華隨享，連通北面銀河灣計畫，水岸觀光娛樂醫療新未來，黃金四角正核心的關鍵位置，最好的願景都站在這裡！
</p>
        <ul class="dot4" v-if="!isMobile">
        <li
          v-for="item in 2"
          :key="'dot4' + item"
          @click="fnDotChange(item)"
        ></li>
      </ul>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import { isMobile, isTablet } from '@/utils'

export default {
  name: 'swiper-example-thumbs-gallery',
  title: 's4',
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      list: [
        '大都會公園空拍',
        '辰光橋實景拍攝',
        '大都會公園實景拍攝',
        '機捷A2站實景拍攝',
        // some
      ],
      vm: this,
      isMobile,
      isTablet,
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
    }
  },

  created() {},

  mounted() {},

  computed: {}
}
</script>

<style lang="sass" scoped>
@import "src/assets/style/myvar"
@import ./sass/share
// ====================================
// == TEXT
// ====================================
.sec4
  background: #004A77BB
.text
  width: 80vw
  margin: 0 auto
  color: #fff
  line-height: 1.5
  font:
    size: calc(12 * 100vw / 375)
  h2
    color: $yellow
    font:
      size: 1.25em
      weight: 600
  p
    font:
      family: "Noto Sans TC" !important
      weight: 300
@media screen and (min-width: $bp-pc)
  $g: 2vw
  .text
    position: relative
    display: flex
    flex-direction: column
    justify-content: flex-end
    line-height: 1.7
    font:
      size: calc(20 * 100vw / 1920)
    p, h2
      width: 100%
      display: flex
      align-items: center
      justify-content: flex-start
      // margin-bottom: 3vw
    & > *
      &:nth-child(1), &:nth-child(2)
        // margin-top: 5vw
      &:nth-child(5), &:nth-child(6)
        //margin-bottom: 5vw
    h1
       text-align: left
       font:
        size: 1.63em
        line-height:1.4
        margin-bottom: .5vw
        weight: 500

    h2
      text-align: left
      font:
        size: 1.63em
      line-height:1.4
      margin-bottom: .5vw
    p
      padding:
        bottom: 2vw
      text-align: justify
      letter-spacing: 0vw

@media screen and (max-width: $bp-mb)
  .text
    margin-top: 7vw
    h1
      font:
        size: 1.63em
    h2
      line-height: 1.5
      size: 1.63em
    p
      font-size: 3.2vw
      margin: 4vw 0 10vw
      &:last-child
        margin:
          bottom: 20vw

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

// ====================================
// == 架構
// ====================================
#sec4
  position: relative
  display: flex
.box
  font-size: 0
  overflow: hidden

@media screen and (min-width: $bp-pc)
  #sec4
    width: 80vw
    margin: 0 auto
    padding:
      top: 7vw
      bottom: 7vw
    position: relative
    &:after
      content: ""
      position: absolute
      left: 50%
      width: 1px
      top: 7vw
      bottom: 7vw
      background-color: #fff
  .box
    width: 37vw
  .text
    width: 39vw
    padding:
      left: 4vw
@media screen and (max-width: $bp-mb)
  #sec4
    flex-direction: column
    padding-top: 15vw

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

// ====================================
// == msg
// ====================================
.gradient
  position: absolute
  width: 100%
  height: 10vw
  bottom: 0
  background-image: linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0))

.msg
  position: absolute
  left: 10px
  bottom: 10px
  color: #fff
  font-size: 12px
</style>
