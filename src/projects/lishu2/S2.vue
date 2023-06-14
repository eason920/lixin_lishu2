<template>
  <div class="relative">
    <section id="sec3">
      <div class="s3box" id="box3">
        <div class="s3pic">
          <img v-if="isMobile" src="./S2/bg.jpg" class="basic" />
          <img v-if="isMobile" src="./S2/bgtm.png" class="float" />
        </div>
      </div>
      <div class="s3msg">
        <div class="s3tbox">
          <div class="s3t">
            市心之城<b></b>
            <p></p>
          </div>
          <div class="s3s">中正路、新泰路交匯3000坪角地</div>
        </div>
        <div class="s3p">
          坐落新莊最熱鬧的繁華雙大道，地段價值湧現，優勢的總價帶，北市上班，下班住最安全的新房子，坐享大都市咫尺繁華，更奢侈悠遊於超凡格局，北台灣最優越CP值地段，戶戶珍稀，席席爭藏。
        </div>
      </div>
      <div v-if="isMobile" id="fingerbox">
        <img
          class="finger"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABJCAYAAACuPXHDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAErElEQVR4nO2cv3LTQBDGvzCpGGbkki4u6G2eIE5FGfMEVloazBMQnoA00OI8AaGkQn4ClCdAfgLkGUpmjrnMKuxsJFmK7p9kfzOa2JYs636629vdW+VIKYUWiunQVZsv9VCt23ncEuIXep0BSAYKccbaicYwdY9ssMXqv1YNv9PnbcXaGzdpxwFi9dYK5gGiIZi+Ic6UUkvapn2G6QviXCmVqYfKCG7vYPqAGJcAlJr3DaZriOMSaIlSKhWf5UqpUZ9guoSotysBi9vFmYC5DBBkJczCIX8D4BO9/k5O6KyjY1vmsE/Z60sAqTj+GsCC3uvfv6o4x6jjtXWRZvMcwCty3J8C+FxQlkPLhMruZsLOWzap8FGRNDhHCEp5j/xNf/8CuAXwx9PdzhockzY4xraeAZhQiH3HrgD5moaW3vmChlUIF1ympeffnxKrY+p0mh2e0M6c4OkdER04rT/fXqqAGBGrGbG7B3mAuVuVECFA4gCzUrUQUQISB5gPtBMiKkDiAPNejSCiBiQOMJtDxA6Q2GOYrSCiAUjsIczWENFi8auAWcTPTSKQvipj7WsEsQ1IDhNNT95TPaqdbUAOHSBX63a2BelSp9SglK2j34R6M5tMNj4VEdAF5f4yymMGp9BBSmmw70MsmQkZpHY9zgBcUOZ8y/bpHqrYltGwj2vOZ1Uhg8zJLq4I0JjglukEwDkb/nPXFxvyZCOVE6BfO47TUL8CeMeS05lt37dPIEEwNgQLNPQzikbmbOFM62PJ97+RCTBuY/s22aCkZ3H7+FLYUqli+KdkKoypjyDrlIretq0AO6FjjS3rDg0kqHcWKmAd0SLVmu2LKtbNHyXTIMcUp84CzBDd0HV9YJ8tTPVKUyBH5KroGfUHbT/Jfnnz7Sp0KYa7kRtuAqSGmFEoJ3VCxj3xXGYiZXzN3gRIbWci9n5T4jifCts1OHX1I0fCd7tmQ3lMM2jRU8t6rFRCE0OduhZ3WVHXHsnty1bYw4wafR1IW63KZGRTlSeMCfjEUZty5uY4q1/qCpJHGSdiXYdrSTO5C6U+hn/XoZ0JJ/emwp1IKM4drEzM2jxjXbdcO+jnF02A1OAu2PuIoEm/cajPLt7JVGSzovxfoUmJE57vyMy4VBNXrJVMxtpXwtWZlAznIoFwFFAPNbIqaTppEQuY5yYzLIYkTY4RF8lGGi0WM/lbH2soNbKSlbKVj5xTzF1oZToj3UH8OtamTmoLZC56YRSQ+8NBGqvasJkhT8VMfhrAox0QUY+xELLtPwd5jBLmbmzJRvksC8xZ2u/MlPfgYs0mZv5j5Ll2Zyxyp8ZuqAuQmXCBFh7Xc/iw3vQNJKgXbsR7H+IgjQYELpdjObxzT+7QIECuPPfKKSt1QZ9BQthK19EOXwa5Ne05uAbJnfLIMUz+W70vospFptwVyLkY1saXhn3U/vBGuARZaG0jIPANMnLkU1od1vAEMheVGLZBzkQ0Y6Xiw1dZH08WuABZaG3rOR1fILmNcgnS2vKGL5C8Qbar1PiNGhxILpulLDLbY62EJQQbaVM8nt/YfI7R1+MhskHWs8u2k8lDLMavktWnavcJpD1zAuAfMiguMm+CB/8AAAAASUVORK5CYII="
          lazy="loaded"
        />
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
@import "src/assets/style/myvar"
#sec3
  // height: 100vh
.s3box

@media screen and (min-width: $bp-pc)
  // $area: 300px
  .s3pic
    background:
      image: url(./S2/bg.jpg)
      size: contain
      position: 0 100%
      repeat: no-repeat
    font-size: 0
    position: relative
    width: 100vw
    height: 56.25vw
    transition: .1s
    &:after
      content: ""
      position: absolute
      width: 100%
      height: 100%
      left: 0
      top: 0
      background:
        image: url(./S2/bgt.png)
        size: contain

@media screen and (max-width: $bp-mb)
  #sec3
    background:
      color: #0059a9
  .s3box
    overflow:
      x: scroll
      y: hidden
    height: 550 * 100vw / 375
    position: relative
  .s3pic
    position: relative
    height: 100%
    img
      height: 100%
    .float
      position: absolute
      height: 40%
      left: 210 * 100vw / 375
      bottom: 5%

// --------------------------------
// -- msg
// --------------------------------
.s3msg
  position: absolute
  top: 7vw
  color: #fff
  @extend %centerX
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.s3tbox
  width: 496px
.s3t
  font-size: 100vw * 18 / 1920
  position: relative
  width: 70%
  margin: auto
  &:after, &:before
    content: ''
    position: absolute
    width: 6px
    height: 6px
    border-radius: 50%
    background: #fff
    @extend %centerY
  &:before
    left: 0
  &:after
    right: 0
  b, p
    // @extend %centerY
    top: 50%
    height: 1px
    width: calc(50% - 55px)
    background-color: #fff
    position: absolute
  b
    left: 0
  p
    right: 0

.s3s
  font:
    size:100vw * 32 / 1920
    weight: 700
  margin: 0.8em 0 1.2em

.s3p
  font-size:(100vw * 18 / 1920)
  line-height: 2
  width:34em

@media screen and (max-width: $bp-mb)
  .s3pic
    padding-top: 90px
  .s3msg
    top: 40px
    width: 83%
  .s3tbox
    width: 100%
  .s3t
    font-size:100vw * 15 / 375
    width:95%
    b, p
      width: calc(50% - 55px)

  .s3s
    font:
      size: 100vw * 19 / 375
    margin: 15px -10% 20px
    width: 120%

  .s3p
    font:
      size: 100vw * 14 / 375
      weight: lighter
    width: 100%

// --------------------------------
// FINGER BOX
#fingerbox
  @include fullScreen
  background: rgba(0,102,153,.6)
  cursor: ew-resize
  transform: .3s
  &.on
    background: rgba(0,102,153,0)
    .finger
      opacity: 0

.finger
  opacity: 1
  transform: .2s
  position: absolute
  animation: move 2s ease-in-out infinite alternate-reverse

@keyframes move
  0%
    transform: translateX(0)
  to
    transform: translateX(-50%)
@media screen and (min-width: $bp-pc)
  .finger
    top: 26vw
    width: 4.2708333333vw
@media screen and (max-width: $bp-mb)
  .finger
    bottom: 35vw
    width: 20vw
</style>

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
        let SL =  80 * $doc.offsetWidth / 100  // 位子換成%
        $doc.scrollLeft = SL

        // $('#fingerbox').fadeOut()

        let startX = 0
        $('#fingerbox').on('touchstart', e => {
          $('#fingerbox').addClass('on')

          if (startX === 0) {
            startX = e.targetTouches[0].pageX
          }
          console.log('touchstart', startX)
          // $('.s3box').addClass('move')
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

        $('#fingerbox').on('touchend', e => {
          $('#fingerbox').remove()
        })
      }, 1000)
    }
  },

  computed: {}
}
</script>
