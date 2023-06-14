<template>
  <div class="relative">
    <div class="title"
      data-aos-once="false"
      data-aos="fade-in"
      data-aos-delay="0"
      data-aos-duration="800"
    >
      <img src="./S3/title.png" />
    </div>
    <section id="sec3">
      <div class="box_text">
        <div>
          <h2>複製信義計畫、南港經貿經驗<br/>台北未來20年，就看北士科</h2>
          <p
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1400"
          >台北最後一塊重劃區、台北科技走廊最後一塊拼圖，引進生技、數位醫療、智慧科技等產業，北士科就是未來的信義計畫區，強勢動能逆襲大台北。</p>
          <div v-if="isMobile" class="canvas0"><img src="./S3/empty0.png" /><img class="float group0" :class="[{ani: bAddClass0}]" src="./S3/0_m.jpg" /></div>
          <h2 v-if="!isMobile">各大知名企業超前部署 啟動大北區門戶經濟引擎</h2>
          <h2 v-if="isMobile">各大知名企業超前部署<br>啟動大北區門戶經濟引擎</h2>
          <p
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1400"
          >拔高262公尺金仁寶大樓地標、3.89公頃新光人壽開發案等知名企業強勢進駐、超前部署上看兆元產值，北士科全面主導大台北未來20年願景。</p>

          <h2 v-if="!isMobile">政府交通建設先行 漲幅增值勢在必行</h2>
          <p
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1400"
            v-if="!isMobile"
          >預計2023年完工的福國路交流道延伸線，直上洲美快速道路，社子輕軌、捷運環狀線北環段，皆以北士科為核心，打造大北區軌道樞紐中心。</p>

          <h2 v-if="!isMobile">大北區能量蓬勃發展 增值巨輪 全面啟動</h2>
          <p
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1400"
            v-if="!isMobile"
          >號稱「士林三寶」的士林電機、士林紙業、新光紡織領銜民間活化，老工廠轉身文創商業美型街闊，「台北2050願景計畫」讓大北區整體再生如虎添翼！</p>
        </div>
      </div>
      <div class="box_canvas">
        <div class="canvas0" v-if="!isMobile"><img src="./S3/empty0.png" /><img class="float group0" :class="[{ani: bAddClass0}]" src="./S3/0.jpg" /></div>
        <div class="canvas">
          <div><img src="./S3/empty.png" /><img class="float group1" :class="[{ani: bAddClass1}]" src="./S3/11.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group1" :class="[{ani: bAddClass1}]" src="./S3/12.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group1" :class="[{ani: bAddClass1}]" src="./S3/13.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group1" :class="[{ani: bAddClass1}]" src="./S3/14.jpg" /></div>
          <!---->
          <div><img src="./S3/empty.png" /><img class="float group2" :class="[{ani: bAddClass2}]" src="./S3/21.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group2" :class="[{ani: bAddClass2}]" src="./S3/22.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group2" :class="[{ani: bAddClass2}]" src="./S3/23.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group2" :class="[{ani: bAddClass2}]" src="./S3/24.jpg" /></div>
          <!---->
          <div><img src="./S3/empty.png" /><img class="float group3" :class="[{ani: bAddClass3}]" src="./S3/31.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group3" :class="[{ani: bAddClass3}]" src="./S3/32.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group3" :class="[{ani: bAddClass3}]" src="./S3/33.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group3" :class="[{ani: bAddClass3}]" src="./S3/34.jpg" /></div>
          <!---->
          <div><img src="./S3/empty.png" /><img class="float group4" :class="[{ani: bAddClass4}]" src="./S3/41.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group4" :class="[{ani: bAddClass4}]" src="./S3/42.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group4" :class="[{ani: bAddClass4}]" src="./S3/43.jpg" /></div>
          <div><img src="./S3/empty.png" /><img class="float group4" :class="[{ani: bAddClass4}]" src="./S3/44.jpg" /></div>
        </div>
        <h2 v-if="isMobile">政府交通建設先行 漲幅增值勢在必行</h2>
        <p v-if="isMobile"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1400"
        >預計2023年完工的福國路交流道延伸線，直上洲美快速道路，社子輕軌、捷運環狀線北環段，皆以北士科為核心，打造大北區軌道樞紐中心。</p>
        <h2 v-if="isMobile">大北區能量蓬勃發展 增值巨輪 全面啟動</h2>
        <p v-if="isMobile"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1400"
        >號稱「士林三寶」的士林電機、士林紙業、新光紡織領銜民間活化，老工廠轉身文創商業美型街闊，「台北2050願景計畫」讓大北區整體再生如虎添翼！</p>
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
@import src/assets/style/myvar
@import ./sass/share
$g: 5px
#sec3
  display: flex
  color: #fff
  line-height: 1.5
  font:
    size: calc(12 * 100vw / 375)
  h2
    font:
      size: 1.25em
      weight: 600
  p
    font:
      family: "Noto Sans TC" !important
      weight: 300
.title
  margin: 0 auto
  img
    width: 100%
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
.canvas0
  width: calc( 100% - #{$g})
  margin:
    bottom: $g - 1
    left: $g / 2
  @include effect
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
  #sec3
    padding: 3vw 10vw 5vw
    line-height: 1.7
    font:
      size: calc(20 * 100vw / 1920)

    h2
      text-align: left
      font:
        size: 1.63em
    p
      margin: 1.5vw 0 5vw
      text-align: justify
  .title
    width: 30vw
  $g: 2vw
  .box_text
    order: 2
    width: 52vw
    margin-right: -2vw
    padding:
      left: $g
    display: flex
    align-items: center
  .box_canvas
    order: 1
    width: 50vw
    padding: 2vw $g 2vw 0
    border-right: solid 1px #fff
@media screen and (max-width: $bp-mb)
  #sec3
    flex-direction: column
    padding: 5vw 10vw
    h2
      font:
        size: 4.2vw
      span
        display: block
        text-align: center
    p
      margin: 3vw 0 12vw
      font:
        size: 3.2vw
  .title
    width: 65vw
    margin-top: 18vw
  .canvas0, .canvas
    margin-bottom: 12vw
  .canvas0
    height:auto
    overflow: inherit
    margin-bottom: 23vw
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section3',

  data() {
    return {
      isMobile,
      bAddClass0: false,
      bAddClass1: false,
      bAddClass2: false,
      bAddClass3: false,
      bAddClass4: false,
    }
  },

  methods: {
    fnCCheck(i) {
      if (i === this.nCurrent) {
        this.bOn = !this.bOn
      } else {
        this.nCurrent = i
      }
    }
  },

  created() {},

  mounted() {
    const target0 = $('.group0')
    const target1 = $('.group1')
    const target2 = $('.group2')
    const target3 = $('.group3')
    const target4 = $('.group4')
    let offset0 = 0
    let offset1 = 0
    let offset2 = 0
    let offset3 = 0
    let offset4 = 0
    setTimeout(() => {
      offset0 = target0.offset().top
      offset1 = target1.offset().top
      offset2 = target2.offset().top
      offset3 = target3.offset().top
      offset4 = target4.offset().top
      action()
    }, 3000)
    const action = () => {
      const scrollTop = $(window).scrollTop() + $(window).height() - 50
      this.bAddClass0 = scrollTop >= offset0
      this.bAddClass1 = scrollTop >= offset1
      this.bAddClass2 = scrollTop >= offset2
      this.bAddClass3 = scrollTop >= offset3
      this.bAddClass4 = scrollTop >= offset4
    }
    $(window).scroll(() => {
      action()
    })
  },

  computed: {}
}
</script>
