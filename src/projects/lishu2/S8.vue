<template>
  <div class="relative sec8">
    <section id="sec8">
      <div class="box"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >
        <div class="pre" @click="prevBtn"></div>
        <div class="nxt" @click="nextBtn"></div>
        <swiper v-if="isMobile" :options="swiperOption" ref="swiper8">
          <swiper-slide v-for="item in list" :key="'s8' + item">
            <div class="msg">{{ item }}</div>
          </swiper-slide>
        </swiper>
        <swiper v-else :options="swiperOption" ref="swiper8">
          <swiper-slide v-for="item in 2" :key="'s8' + item">
            <div class="msg">{{ item }}</div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="text" v-if="!isMobile">
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >用世界的語言 歡迎未來三重人</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >一如全球奢尚高端的星級酒店，華美的挑高大堂，極具現代感的造型沙發，透過親切熱忱的禮賓接待，感受飯店VIP的尊榮禮遇，交誼聽、宴會廳、健身房…穿透花園綠意，瑜珈教室、美式娛樂區、兒童遊戲室、親子書屋構築仕紳名媛質感的招待所氛圍，每一個端景都透著典雅，讓人舒心放鬆的氣息。</p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >水岸第一排 公園第一景</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >
        公園水岸雙首排，高坪效1~3房空間，大面積開窗，迎向水岸公園第一排景觀包廂，0遮蔽水岸端景視野，從格局配置到採光通風，型塑精緻美型空間一如星級飯店總統套房饗宴，景觀頭等艙、户戶親河力的新貴族輕奢華住居。


</p>
      </div>
      <div class="text" v-else>
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >用世界的語言 歡迎未來三重人</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >一如全球奢尚高端的星級酒店，華美的挑高大堂，極具現代感的造型沙發，透過親切熱忱的禮賓接待，感受飯店VIP的尊榮禮遇，交誼聽、宴會廳、健身房…穿透花園綠意，瑜珈教室、美式娛樂區、兒童遊戲室、親子書屋構築仕紳名媛質感的招待所氛圍，每一個端景都透著典雅，讓人舒心放鬆的氣息。</p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >水岸第一排 公園第一景</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >公園水岸雙首排，高坪效1-3房空間，大面積開窗，迎向水岸公園第一排景觀包廂，0遮蔽水岸端景視野，從格局配置到採光通風，型塑精緻美型空間一如星級飯店總統套房饗宴，景觀頭等艙、户戶親河力的新貴族輕奢華住居。

</p>
      </div>
      <ul class="dot8" v-if="!isMobile">
        <li
          v-for="item in 2"
          :key="'dot8' + item"
          @click="fnDotChange(item)"
        ></li>
      </ul>
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
        '公設3D示意圖',
        '公設3D示意圖',
        '公設3D示意圖',
        '公設3D示意圖',
        // some
      ],
      vm: this,
      isMobile,
      isTablet,
      swiperOption: {
        loop: true,
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 20
          },
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
            if (eq >= 2) {
              eq = eq - 2
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
.sec8
  background: #004A77BB

.text
  width: 80vw
  margin: 0 auto
  color: #fff
  line-height: 1.5
  z-index: 2
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
    width: 70vw
    display: flex
    flex-wrap: wrap
    // align-content: center
    justify-content: center
    line-height: 1.7
    font:
      size: calc(20 * 100vw / 1920)
    padding-top: $g
    margin-top: 3vw
    &:after
      content: ""
      position: absolute
      left: 50%
      width: 1px
      top: 0
      bottom: 0
      background-color: #fff
    p, h2
      width: 50%
      display: flex
      align-items: center
      // margin-bottom: 3vw
    & > *
      &:nth-child(1), &:nth-child(2)
        // margin-top: 5vw
      &:nth-child(5), &:nth-child(6)
        margin-bottom: 5vw
    h2
      text-align: right
      justify-content: flex-end
      font:
        size: 1.63em
      line-height:1.4
      margin-bottom: .5vw
      padding:
        right: $g
        bottom: 2vw
    p
      display: flex
      padding:
        left: $g
      margin:
        bottom: 2vw
      text-align: justify
      letter-spacing: 0vw

@media screen and (max-width: $bp-mb)
  .text
    margin-top: 7vw
    h2
      line-height: 1.5
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
      background-image: url('./S8/1.png')

    &:nth-child(2), &:nth-child(4), &:nth-child(6)
      background-image: url('./S8/2.png')
@media screen and (max-width: $bp-mb)
  .swiper-slide
    background-repeat: no-repeat
    &:nth-child(1), &:nth-child(5), &:nth-child(9)
      background-image: url('./S8/m1.png')

    &:nth-child(2), &:nth-child(6), &:nth-child(10)
      background-image: url('./S8/m2.png')

    &:nth-child(3), &:nth-child(7), &:nth-child(11)
      background-image: url('./S8/m3.png')

    &:nth-child(4), &:nth-child(8), &:nth-child(12)
      background-image: url('./S8/m4.png')
// ====================================
// == 架構
// ====================================
#sec8
  position: relative
  display: flex
  flex-direction: column
.box
  font-size: 0
  overflow: hidden

@media screen and (min-width: $bp-pc)
  #sec8
    width: 100vw
    margin: 0 auto
    padding:
      top: 7vw
      bottom: 7vw
    position: relative

@media screen and (max-width: $bp-mb)
  #sec8
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
    height: 26.5vw // w * 0.562

  // w
  .swiper-container
    width:  80vw

  // gurter
  // .box
  //   position: relative
  //   & > div
  //     padding-left: calc( (100vw - 70vw) / 2 + 20px )

@media screen and (max-width: $bp-mb)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 42vw // w * 2.87

  // w
  .swiper-container
    // width: 80vw

  // gurter
  .box
    position: relative
    & > div
      padding-left: calc( (100vw - 83vw) / 2 + 14px)

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
      background-image: linear-gradient(to right, rgba(0,74,119,.8), rgba(0,74,119,0))
    &:after
      background-image: linear-gradient(to left, rgba(0,74,119,.8), rgba(0,74,119,0))
      right: 0
  .pre
    left: $lr

  .nxt
    right: $lr

// --------------------------------
// dot
$w: 10px
@media screen and (min-width: $bp-pc)
  .dot8
    display: flex
    height: 6px
    position: absolute
    left: 10vw
    top: 34.3vw
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

// ====================================
// == msg
// ====================================
.msg
  position: absolute
  left: 10px
  bottom: 10px
  color: #fff
  font-size: 12px
  text-shadow: 0 0 12px #000, 0 0 5px #000
@media screen and (min-width: $bp-pc)
  .msg
    display: none
</style>
