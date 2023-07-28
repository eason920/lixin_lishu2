<template>
  <div class="relative">
    <section id="sec3">
      <div class="box">
        <div class="box_canvas">
          <div class="canvas">
            <div><img src="./S10/empty.png" /><img class="float group1a" :class="[{ani: bAddClass1}]" src="./S10/1.png" /></div>
            <div><img src="./S10/empty.png" /><img class="float group1a" :class="[{ani: bAddClass1}]" src="./S10/2.png" /></div>
            <div><img src="./S10/empty.png" /><img class="float group1a" :class="[{ani: bAddClass1}]" src="./S10/3.png" /></div>
          </div>
          <div class="canvas0a"><img src="./S10/empty0.png" />
            <img class="float group0a" :class="[{ani: bAddClass0}]" src="./S10/4.png" />
          </div>
          <div class="canvas">
            <div><img src="./S10/empty.png" /><img class="float group2a" :class="[{ani: bAddClass2}]" src="./S10/5.png" /></div>
            <div><img src="./S10/empty.png" /><img class="float group2a" :class="[{ani: bAddClass2}]" src="./S10/6.png" /></div>
            <div><img src="./S10/empty.png" /><img class="float group2a" :class="[{ani: bAddClass2}]" src="./S10/7.png" /></div>
          </div>
        </div>
      </div>
      <div class="text">
        <h3
          v-if="!isMobile"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"><span class="en">GLOBAL BOUTIQUE</span>
          <img loading="lazy" src="./S1/logo.png" /></h3>
        <h2
          v-if="!isMobile"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
        >國際建材高規格禮遇 成就完美精緻住宅</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
          v-if="!isMobile"
        >
<span>Panasonic全自動馬桶，自動洗淨，乾淨又方便。</span>
<span>日本nanoe™奈米水離子發生器，淨化梯廳空間空氣品質。</span>
<span>德國Bosch洗碗機，極智科技聰明省水輕鬆解決洗碗差事。</span>
<span>英國STUDOR排水防疫系統、居家空氣清新無臭無蟲害。</span>
<span>Honeywell智慧型反逆洗過濾器，全面提升居家用水品質。</span>
<span>櫻花廚下淨水器，打開水龍頭隨時滿足居家生飲洗滌用水。</span>
        </p>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="0"
          v-else
        >
<span>Panasonic全自動馬桶，自動洗淨，乾淨又方便</span>
<span>日本nanoe™奈米水離子發生器，淨化梯廳空間空氣品質</span>
<span>德國Bosch洗碗機，極智科技聰明省水輕鬆解決洗碗差事</span>
<span>英國STUDOR排水防疫系統、居家空氣清新無臭無蟲害</span>
<span>Honeywell智慧型反逆洗過濾器，全面提升居家用水品質</span>
<span>櫻花廚下淨水器，打開水龍頭隨時滿足居家生飲洗滌用水</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery'
import { isMobile } from '@/utils'

export default {
  name: 'section3',
  data() {
    return {
      isMobile,
      vm: this,
      bAddClass0: false,
      bAddClass1: false,
      bAddClass2: false,
      bAddClass3: false,
      bAddClass4: false,
    }
  },

  methods: {},

  created() {},

  mounted() {
    const target0 = $('.group0a')
    const target1 = $('.group1a')
    const target2 = $('.group2a')
    let offset0 = 0
    let offset1 = 0
    let offset2 = 0
    let offset4 = 0
    setTimeout(() => {
      offset0 = target0.offset().top
      offset1 = target1.offset().top
      offset2 = target2.offset().top
      action()
    }, 3000)
    const action = () => {
      const scrollTop = $(window).scrollTop() + $(window).height() - 50
     /* console.log('scrollTop>>', scrollTop)
      console.log('offset0>>', offset0)
      console.log('this.bAddClass0', this.bAddClass0) */
      this.bAddClass0 = scrollTop >= offset0
      this.bAddClass1 = scrollTop >= offset1
      this.bAddClass2 = scrollTop >= offset2
    }
    $(window).scroll(() => {
      action()
    })
  },

  computed: {}
}
</script>

<style lang="sass" scoped>
@import src/assets/style/myvar

$g: 5px
#sec3
  display: flex
  color: #fff
  &::before
    position: absolute
    content: ""
    display: block
    height: 20vw
    width: 100%
    background: linear-gradient(to top,  #004A77FF 0%, #004A7700 100%)
    bottom: 0
    left: 0
.text
  width: 88vw
  margin: 0 auto
  color: #fff
  .pic
    width: 20vw
    margin-bottom: 3vw
    img
      width: 100%
  h3
    text-align: left
    letter-spacing: 0.03em
    line-height: 1.35
    margin-bottom: 1.5em
    .en
      font-size: 1.86em
    img
      display: block
      width: 13em
      margin: .2em 0 0 0
      transform: scale3d(1,1,1.1)
  h2
    color: $yellow

.box
  overflow: hidden

@media screen and (min-width: $bp-pc)
  .box
    width: 37vw
  .text
    border-left: solid 1px #fff
    width: 35vw
    padding:
      left: 3vw
    display: flex
    flex-direction: column
    justify-content: center

@media screen and (max-width: $bp-mb)
  .box
    position: relative

  .pic
    display: none
  .text
    // font-size: 12px
    text-align: left

// ====================================
// == CANVAS
// ====================================
@keyframes ani
  from
    transform: scale(0)
    opacity: 0
  to
    transform: scale(1)
    opacity: 1
@mixin effect
  // border-radius: 3px
  overflow: hidden
  position: relative
  text-align: center
  img
    width: 100%
    height: 100%
  .float
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    transform: scale(0)
    opacity: 0
    transform-origin: 50% 0
    background: #FFF
    &.ani
      animation: ani .7s linear forwards
.canvas0a
  @include effect
.canvas
  div
    @include effect

p
  text-align: justify
  span
    display: block
    padding-left: 1.3em
    position: relative
    margin-bottom: -1em
    &:before
      content: "◆"
      position: absolute
      left: 0
      top: 0
    &:after
      content: ""
      display: inline-block
      width: 10em
      height: 1em

@media screen and (min-width: $bp-pc)
  #sec3
    padding: 3vw 10vw 5vw

    h2
      text-align: left
    p
      margin: 1.5vw 0 0vw
      text-align: justify

  $g: 2vw
  .box_canvas
    order: 1
    width: 100%
    padding-top: 2vw
@media screen and (max-width: $bp-mb)
  #sec3
    flex-direction: column
    padding: 5vw 0
    h2
      span
        display: block
        text-align: center
    p
      margin: 3vw 0 12vw
  .canvas0, .canvas
    // margin-bottom: 12vw

  .box_canvas
    margin: 5vw 6vw 0
    
.box_canvas
  display: flex
  flex-direction: column
  gap: 0.4em
  div
    display: flex
    flex: 1
    gap: 0.4em
    width: 100%
    
</style>
