<template>
  <div class="relative sec7">
    <section id="sec7">
      <div class="box"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >
        <div class="pre" @click="prevBtn"></div>
        <div class="nxt" @click="nextBtn"></div>
        <swiper :options="swiperOption" ref="swiper7">
          <swiper-slide v-for="item in list" :key="'s7' + item">
            <div class="msg">{{ item }}</div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="text">
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >景觀頭等艙 戶戶親河力</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >717坪三面臨路朗闊基地，大尺度面寬對坐水岸，感受自然與城市交織出的寧靜層次，排列組合成一種人們真正想要的的生活想像，藍帶、綠帶交會水岸城市的溫柔光陰，歡迎未來三重人，這個眼界，就是真正的頂尖！</p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >水岸新三重 景觀第一排<br>
          建築經典 才是永恆的時尚</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >建築應該訴說它的時代與場所，同時又嚮往著永恆，外觀快意簡筆的白色框架，將三重水岸輸入國際品味，與層層向上、彷若展翅的俐落線條美學，讓水岸飯店的質地，透過當代簡約風格融為一體，框聚新世代對未來生活的美好渴望。</p>
      </div>
      <ul class="dot7" v-if="!isMobile">
        <li
          v-for="item in 3"
          :key="'dot7' + item"
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
        '大都會公園空拍',
        '辰光橋實景拍攝',
        '外觀合成示意圖',
        // some
      ],
      vm: this,
      isMobile,
      isTablet,
      swiperOption: {
        loop: true,
        breakpoints: {
          768: {
            slidesPerView: 1.3,
            spaceBetween: 40
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
.sec7
  background: #004A77BB
  z-index:1
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
    &:nth-child(1), &:nth-child(4), &:nth-child(7)
      background-image: url('./S7/3.jpg')

    &:nth-child(2), &:nth-child(5), &:nth-child(8)
      background-image: url('./S7/1.jpg')

    &:nth-child(3), &:nth-child(6), &:nth-child(9)
      background-image: url('./S7/2.jpg')

@media screen and (max-width: $bp-mb)
  .swiper-slide
    background-repeat: no-repeat
    &:nth-child(1), &:nth-child(4), &:nth-child(7)
      background-image: url('./S7/1.jpg')

    &:nth-child(2), &:nth-child(5), &:nth-child(8)
      background-image: url('./S7/2.jpg')

    &:nth-child(3), &:nth-child(6), &:nth-child(9)
      background-image: url('./S7/3.jpg')

// ====================================
// == 架構
// ====================================
#sec7
  position: relative
  display: flex
  flex-direction: column
.box
  font-size: 0
  overflow: hidden

@media screen and (min-width: $bp-pc)
  #sec7
    width: 100vw
    margin: 0 auto
    padding:
      top: 7vw
      bottom: 7vw
    position: relative

@media screen and (max-width: $bp-mb)
  #sec7
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
    height: 31.5vw // w * 0.562

  // w
  .swiper-container
    // width:  100%

  // gurter
  .box
    position: relative
    & > div
      padding-left: calc( (100vw - 70vw) / 2 + 20px )

@media screen and (max-width: $bp-mb)
  // h
  .swiper-container, // height
  .swiper-wrapper,
  .swiper-slide
    height: 50vw // w * 2.87

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
  .dot7
    display: flex
    height: 6px
    position: absolute
    left: 50%
    transform: translateX(-50%)
    top: 37.2vw
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
  .dot7
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
</style>
