<template>
  <div class="relative">
    <section id="sec2">
      <div class="title"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        v-if="!isMobile"
      >能住水岸第一排 何必屈就第二排</div>
      <div class="box" id="box3" v-if="isMobile">
        <div class="s2pic">
          <img src="./S2/map.jpg" class="basic" />
          <img src="./S2/img.png" class="basic" />
        </div>
      </div>
      <div class="pc_pic" v-else
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >
        <img src="./S2/map.jpg" />
        <img src="./S2/img.png" />
      </div>
      <div class="title" v-if="isMobile"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >能住水岸第一排 何必屈就第二排</div>
      <div class="msg"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >
        景觀的價值性，在於土地的稀有性，<br />
        放眼大直經驗，近30年來水岸第一排的建案價格，<br v-if="isMobile" />
        超過非首排個案價格高達66%！<br />
        雙北同時擁有綠地水岸公園的「大都會水岸特區」，<br v-if="isMobile" />
        【萊茵水花園】以景觀頭等艙的姿態，<br />
        對位大直水岸，超越大安森林，<br v-if="isMobile" />
        升等水岸第一排尊榮生活，讓資產看得到未來。
      </div>
      <div v-if="isMobile" id="fingerbox">
        <div>
          左右滑動觀看
          <svg class="finger" width="25" height="34" viewBox="0 0 25 34" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
<circle class="st0" cx="12.5" cy="6.3" r="6"/>
<path fill="#004A77" stroke="#FFF" d="M19.2,19.9l0.6-2c0.1-0.4,0.4-0.8,0.8-1.1c0.2-0.1,0.5-0.2,0.7-0.2c0.3,0,0.5,0,0.8,0.1c0.3,0,0.5,0.1,0.7,0.3c0.2,0.1,0.4,0.3,0.5,0.5c0.1,0.2,0.2,0.4,0.3,0.7c0,0.2,0,0.5-0.1,0.7l-2.3,7.8c-0.2,0.8-0.6,1.5-1.1,2.2c-4.1,6.2-14,4.8-16.8-1.8c-0.7-1.6-2-10.6-2-10.6c0-0.3,0-0.5,0.1-0.7c0.1-0.2,0.2-0.5,0.5-0.6c0.2-0.2,0.4-0.3,0.7-0.4c0.3-0.1,0.6-0.1,0.8-0.1c0.5,0,1,0.2,1.4,0.5c0.4,0.3,0.6,0.7,0.7,1.2l1,4.5l4.1-13.8c0.1-0.5,0.5-0.8,0.9-1.1c0.5-0.2,1-0.3,1.5-0.2c0.5,0.1,1,0.4,1.2,0.8c0.3,0.4,0.4,0.9,0.2,1.3L11.4,18l1.3-4.2c0.1-0.2,0.2-0.4,0.3-0.6c0.2-0.2,0.4-0.3,0.6-0.5c0.2-0.1,0.5-0.2,0.7-0.2c0.3,0,0.5,0,0.8,0c0.5,0.1,1,0.4,1.2,0.8c0.3,0.4,0.3,0.9,0.2,1.3l-1.3,4.3l1-3.2c0.1-0.2,0.2-0.4,0.3-0.6c0.2-0.2,0.4-0.3,0.6-0.5c0.2-0.1,0.5-0.2,0.7-0.2c0.3,0,0.5,0,0.8,0c0.3,0.1,0.5,0.2,0.7,0.3c0.2,0.1,0.4,0.3,0.5,0.5c0.1,0.2,0.2,0.4,0.3,0.7c0,0.2,0,0.5-0.1,0.7l-0.3,1.2L19.2,19.9z"/>
</svg>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      isTablet
    }
  },

  methods: {
    // fnFingerFadeOut() {
    //   console.log('got')
    //   $('#fingerbox').fadeOut()
    // }
  },

  created() {},

  mounted() {
    if (isMobile) {
      console.log('=========MB=========')
      const $doc = document.getElementById('box3')
      setTimeout(() => {
        let SL =  63 * $doc.offsetWidth / 100  // 位子換成%
        $doc.scrollLeft = SL

        // $('#fingerbox').fadeOut()

        let startX = 0
        $('#fingerbox').on('touchstart', e => {
          $('#fingerbox').addClass('on')

          if (startX === 0) {
            startX = e.targetTouches[0].pageX
          }
          console.log('touchstart', startX)
          // $('.box').addClass('move')
        })

        $('#fingerbox').on('touchmove', e => {
          let move = (e.targetTouches[0].pageX - startX) * -1
          switch (true) {
            case move <= -150:
              move = -150
              break
            case move >= 150:
              move = 150
              break
            default:
          }
          $doc.scrollLeft = SL + move
        })

        $('#fingerbox').on('touchstart', e => {
          $('#fingerbox').fadeOut()
        })
      }, 1000)
    }
  },

  computed: {}
}
</script>

<style lang="sass" scoped>
@import "src/assets/style/myvar"
.title
  color: $yellow
  
.msg
  color: #fff
  // letter-spacing: 1.5px
  border: solid #fff
  border-width: 0 1px

@media screen and (min-width: $bp-pc)
  #sec2
    @include lish2pcW
    padding: 8vh 0
  .pc_pic
    position: relative
    width: 100%
    img
      width: 100%
      &:last-child
        position: absolute
        top: 0
        left: 0
  .title
    margin: 0 0 3vw
  .msg
    margin-top: 3vw

@media screen and (max-width: $bp-mb)
  #sec2
    margin-bottom: 20vw
  .box
    overflow:
      x: scroll
      y: hidden
    height: 550 * 100vw / 375
    position: relative
  .s2pic
    position: relative
    height: 100%
    img
      height: 100%
      &:last-child
        position: absolute
        top: 0
        left: 0

  .title
    margin: 10vw 0 5vw
  .msg
    border: none
    span
      display: block

  // --------------------------------
  // FINGER BOX
  #fingerbox
    @include fullScreen
    bottom: auto
    height: 147vw
    background: rgba(0,102,153,.6)
    cursor: ew-resize
    display: flex
    justify-content: center
    align-items: center
    &.on
      background: rgba(0,102,153,0)
      .finger
        opacity: 0
    & > div
      position: relative
      color: #fff
      border-bottom: solid 1px #fff
      width: 80%
      padding-bottom: 10px

  .finger
    position: absolute
    left: 50%
    top: 24px
    width: 8vw
    opacity: 1
    // position: absolute
    animation: move 2s ease-in-out infinite alternate

  @keyframes move
    0%
      transform: translateX(0)
    to
      transform: translateX(-50%)

</style>
