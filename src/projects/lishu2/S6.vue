<template>
  <div class="relative sec6">
    <section id="sec6">
      <div
        class="box"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >
        <div class="pre" @click="prevBtn"></div>
        <div class="nxt" @click="nextBtn"></div>
        <swiper v-if="isMobile" :options="swiperOption" ref="swiper6">
          <swiper-slide v-for="item in list" :key="'s6' + item">
            <div class="gradient"></div>
            <div class="msg">{{ item }}</div>
          </swiper-slide>
        </swiper>
        <swiper v-else :options="swiperOption" ref="swiper6">
          <swiper-slide v-for="item in 2" :key="'s6' + item"> </swiper-slide>
        </swiper>
      </div>
      <div class="text" v-if="!isMobile">
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >
          國際級的創作 頂尖交會合演的新局
        </h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >
          一棟好的建築，需要在美學的格調上做到昇華改變，<br />
          一棟好的住居，需要在空間的意識上達到泰然優雅，<br />
          一個好的未來，需要在生活的精神上感到奢華榮耀，<br />
          以國際級的創作高標，在大都會公園水岸第一排，交會出建築未來新局，用心斟酌水岸天際方寸之間的細節，讓山川水綠風景，成為每一個窗景的完美主角！
        </p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >
          新美齊物業 星級頂奢服務
        </h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >
          引進新美齊物業社區總體營造，透過52週的活動策畫，強化對社區的認同與情感，更在中秋節、聖誕節等，舉辦精彩的慶祝活動，加上對社區生活大小事的專業諮詢與問題排除，讓建築的價值，因生活的品質而歷久彌新，一代帶著下一代的賓至如歸，成為買得起的奢侈品！
        </p>

        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >
          CN Flower 妝點生活美藝
        </h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >
          國際花藝大師凌宗湧的「CN
          Flower」團隊，深受兩岸政商名流、諸多五星級酒店、及精品品牌指定合作，「萊茵水花園」公共空間之端景，讓花藝綻放空間與人美感互動。
        </p>
        <ul class="dot6" v-if="!isMobile">
          <li
            v-for="item in 2"
            :key="'dot6' + item"
            @click="fnDotChange(item)"
          ></li>
        </ul>
      </div>

      <div class="text" v-else>
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          國際級的創作 頂尖交會合演的新局
        </h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          一棟好的建築，需要在美學的格調上做到昇華改變，<br />
          一棟好的住居，需要在空間的意識上達到泰然優雅，<br />
          一個好的未來，需要在生活的精神上感到奢華榮耀，<br />
          以國際級的創作高標，在大都會公園水岸第一排，交會出建築未來新局，用心斟酌水岸天際方寸之間的細節，讓山川水綠風景，成為每一個窗景的完美主角！
        </p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          新美齊物業 星級頂奢服務
        </h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          引進新美齊物業社區總體營造，透過52週的活動策畫，強化對社區的認同與情感，更在中秋節、聖誕節等，舉辦精彩的慶祝活動，加上對社區生活大小事的專業諮詢與問題排除，讓建築的價值，因生活的品質而歷久彌新，一代帶著下一代的賓至如歸，成為買得起的奢侈品！
        </p>
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          CN Flower 妝點生活美藝
        </h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          國際花藝大師凌宗湧的「CN
          Flower」團隊，深受兩岸政商名流、諸多五星級酒店、及精品品牌指定合作，「萊茵水花園」公共空間之端景，讓花藝綻放空間與人美感互動。
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import $ from "jquery";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import { isMobile, isTablet } from "@/utils";

export default {
  name: "swiper-example-thumbs-gallery",
  title: "s6",
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      list: [
        "物業情境示意圖",
        "CN Flower作品",
        "CN Flower作品",
        "新美齊物業",
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
            let eq = this.activeIndex;
            if (!isMobile) {
              if (eq >= 2) {
                eq = eq - 2;
              }
              $(".dot6 li")
                .removeClass("active")
                .eq(eq)
                .addClass("active");
            } else {
              if (eq >= 5) {
                eq = eq - 5;
              }
              $(".dot6 li")
                .removeClass("active")
                .eq(eq)
                .addClass("active");
            }
          }
        }
      }
    };
  },

  methods: {
    prevBtn() {
      this.$refs.swiper6.$swiper.slidePrev();
    },
    nextBtn() {
      this.$refs.swiper6.$swiper.slideNext();
    },
    fnDotChange(i) {
      let eq = i - 1;
      if (eq >= 2) {
        eq = eq - 2;
      }
      this.$refs.swiper6.$swiper.slideTo(eq);
    }
  },

  created() {},

  mounted() {},

  computed: {}
};
</script>

<style lang="sass" scoped>
@import "src/assets/style/myvar"
@import ./sass/share
// ====================================
// == TEXT
// ====================================
.sec6
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
        //margin-bottom: 5vw
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
  .swiper-slide
    background-repeat: no-repeat
    &:nth-child(1), &:nth-child(3), &:nth-child(5)
      background-image: url('./S6/1.png')

    &:nth-child(2), &:nth-child(4), &:nth-child(6)
      background-image: url('./S6/2.png')
@media screen and (max-width: $bp-mb)
  .swiper-slide
    background-repeat: no-repeat
    &:nth-child(1), &:nth-child(5), &:nth-child(9)
      background-image: url('./S6/m1.jpg')

    &:nth-child(2), &:nth-child(6), &:nth-child(10)
      background-image: url('./S6/m2.jpg')

    &:nth-child(3), &:nth-child(7), &:nth-child(11)
      background-image: url('./S6/m4.jpg')

    &:nth-child(4), &:nth-child(8), &:nth-child(12)
      background-image: url('./S6/m5.jpg')

// ====================================
// == 架構
// ====================================
#sec6
  position: relative
  display: flex
.box
  font-size: 0
  overflow: hidden

@media screen and (min-width: $bp-pc)
  #sec6
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
    width: 44vw
    padding:
      left: 7vw
@media screen and (max-width: $bp-mb)
  #sec6
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

  // // w
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
  .dot6
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
  .dot6
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
