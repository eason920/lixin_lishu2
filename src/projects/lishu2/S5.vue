<template>
  <div class="relative sec5">
    <section id="sec5">
      <div class="box"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >
        <div class="pre" @click="prevBtn"></div>
        <div class="nxt" @click="nextBtn"></div>
        <swiper v-if="isMobile" :options="swiperOption" ref="swiper5">
          <swiper-slide v-for="(item, i) in list" :key="'s5' + i + item">
            <div class="gradient"></div>
            <div class="msg">{{ item }}</div>
          </swiper-slide>
        </swiper>
        <img loading="lazy" v-else src="./S5/1.png" />
      </div>
      <div class="text" v-if="!isMobile">
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >捷運新世代 移居第一站</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >Y19b站環狀線北段已開工增值在線，A2a站步行3分鐘位二重公園旁，為討論中預計規劃增設的機捷站，10分鐘快速通往國門軌道經濟圈；台64線、新北環快、七大聯外橋樑縱橫雙北，與新莊副都心及新板特區跨界近享，豐收都會美好生活的時間魔法地圖，穩坐新北第一圈最新最優質的水岸新都心。</p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >新北第一圈 未來三重天際 必要一席之地</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >未來三重水岸新區重大建設以「TOD都市發展計劃」為首，將活化區域改變地貌創造優質環境；三重果菜市場都更案的「綠藝之丘」以綠色藝術文化都心的定位，創作三重的六本木之丘未來願景；加上新北市第一座City Link商場、以及「新北第二行政中心」新市政特區、東森媒體園區…複製信義計畫、新板特區，全面領航三重大未來！</p>
      </div>


      <div class="text" v-else>
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >捷運新世代 移居第一站</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >Y19b站環狀線北段已開工增值在線，A2a站步行3分鐘位二重公園旁，為討論中預計規劃增設的機捷站，10分鐘快速通往國門軌道經濟圈；台64線、新北環快、七大聯外橋樑縱橫雙北，與新莊副都心及新板特區跨界近享，豐收都會美好生活的時間魔法地圖，穩坐新北第一圈最新最優質的水岸新都心。</p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >新北第一圈 未來三重天際 必要一席之地</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >未來三重水岸新區重大建設以「TOD都市發展計劃」為首，將活化區域改變地貌創造優質環境；三重果菜市場都更案的「綠藝之丘」以綠色藝術文化都心的定位，創作三重的六本木之丘未來願景；加上新北市第一座City Link商場、以及「新北第二行政中心」新市政特區、東森媒體園區…複製信義計畫、新板特區，全面領航三重大未來！</p>
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
  title: 's5',
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      list: [
        '機捷A2站實景拍攝',
        'City Link商場示意圖',
        '新北環快實景拍攝',
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
            // let eq = this.activeIndex
            // if (!isMobile) {
            //   if (eq >= 2) {
            //     eq = eq - 2
            //   }
            //   console.log('eq is ', eq)
            //   $('.dot5 li')
            //     .removeClass('active')
            //     .eq(eq)
            //     .addClass('active')
            // } else {
            //   if (eq >= 4) {
            //     eq = eq - 4
            //   }
            //   console.log('eq is ', eq)
            //   $('.dot5 li')
            //     .removeClass('active')
            //     .eq(eq)
            //     .addClass('active')
            // }
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
      if (eq >= 2) {
        eq = eq - 2
      }
      this.$refs.swiper5.$swiper.slideTo(eq)
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
.sec5
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
    justify-content: center
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
        margin-bottom: 5vw
    h2
      text-align: right
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
  // .swiper-slide
  //   background-repeat: no-repeat
  //   &:nth-child(1), &:nth-child(3), &:nth-child(5)
  //     background-image: url('./S4/1.jpg')

  //   &:nth-child(2), &:nth-child(4), &:nth-child(6)
  //     background-image: url('./S4/2.jpg')
@media screen and (max-width: $bp-mb)
  .swiper-slide
    background-repeat: no-repeat
    &:nth-child(1), &:nth-child(4), &:nth-child(7)
      background-image: url('./S5/m1.jpg')

    &:nth-child(2), &:nth-child(5), &:nth-child(8)
      background-image: url('./S5/m2.jpg')

    &:nth-child(3), &:nth-child(6), &:nth-child(9)
      background-image: url('./S5/m3.jpg')

// ====================================
// == 架構
// ====================================
#sec5
  position: relative
  display: flex
.box
  font-size: 0
  overflow: hidden

@media screen and (min-width: $bp-pc)
  #sec5
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
    // height: 34.4vw
    img
      width: 100%
  .text
    width: 39vw
    padding:
      left: 4vw
@media screen and (max-width: $bp-mb)
  #sec5
    flex-direction: column
    padding-top: 15vw

// ====================================
// == SWIPER W/H
// ====================================
.swiper-container
  z-index: 2
@media screen and (min-width: $bp-pc)
  // h
  // .swiper-container, // height
  // .swiper-wrapper,
  // .swiper-slide
  //   height: 34.4vw // w * 0.562

  // // w
  // .swiper-container
  //   width:  100%

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
