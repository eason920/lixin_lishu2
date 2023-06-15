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
          <img src="./S2/bg.png" class="basic" />
        </div>
      </div>
      <div class="pc_pic" v-else
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
      >
        <img src="./S2/bg.png" />
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
        <div>景觀的價值性，在於土地的稀有性，</div>
        <div>放眼大直經驗，近30年來水岸第一排的建案價格，
        <span>超過非首排個案價格高達66%！</span></div>
        <div>
        雙北同時擁有綠地水岸公園的「大都會水岸特區」，
        <span>【萊茵水花園】以景觀頭等艙的姿態，</span></div>
        <div>對位大直水岸，超越大安森林，<span>升等水岸第一排尊榮生活，讓資產看得到未來。</span></div>
      </div>
      <div v-if="isMobile" id="fingerbox">
        <div>
          左右滑動觀看
          <svg class="finger" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="19.332" r="6" fill="white"/>
            <path d="M19.1971 14.8753L19.8077 12.8506C19.92 12.4089 20.2114 12.0192 20.6267 11.7555C20.8506 11.6292 21.1032 11.5483 21.3664 11.5186C21.6297 11.4889 21.8971 11.5111 22.1496 11.5835C22.4105 11.6323 22.6571 11.7288 22.8735 11.8668C23.09 12.0048 23.2716 12.1812 23.4068 12.385C23.542 12.5887 23.6278 12.8151 23.6587 13.0499C23.6896 13.2846 23.665 13.5226 23.5863 13.7484L21.2373 21.5545C20.9959 22.3369 20.6358 23.0865 20.1669 23.783C16.0938 29.9592 6.19469 28.5394 3.32123 21.943C2.60286 20.3385 1.33854 11.297 1.33854 11.297C1.3104 11.0469 1.34537 10.7945 1.44094 10.5579C1.53651 10.3213 1.69028 10.1065 1.89109 9.92916C2.09191 9.75178 2.33474 9.61628 2.60197 9.53238C2.86921 9.44848 3.15416 9.41836 3.43617 9.44416C3.95256 9.44081 4.45144 9.60994 4.83349 9.91789C5.21555 10.2258 5.45275 10.65 5.49787 11.106L6.53232 15.6267L10.6773 1.87354C10.8059 1.4176 11.1336 1.02557 11.5883 0.783767C12.0429 0.541965 12.5874 0.470184 13.1018 0.58417C13.6162 0.698156 14.0584 0.988571 14.3312 1.39157C14.604 1.79458 14.6851 2.27716 14.5565 2.7331L11.4459 13.0416L12.7246 8.79469C12.7907 8.56828 12.9065 8.35565 13.0655 8.16901C13.2245 7.98237 13.4235 7.82541 13.6511 7.70709C13.8787 7.58878 14.1304 7.5114 14.3918 7.47951C14.6532 7.44763 14.9191 7.46184 15.1743 7.52125C15.6891 7.641 16.1295 7.93676 16.3988 8.34374C16.6681 8.75071 16.7444 9.23566 16.611 9.69241L15.3323 13.9457L16.2877 10.7621C16.3557 10.5372 16.4729 10.3264 16.6328 10.1416C16.7926 9.95682 16.992 9.80174 17.2194 9.68526C17.4469 9.56879 17.698 9.49319 17.9585 9.46274C18.2189 9.43228 18.4836 9.44761 18.7373 9.50782C18.9911 9.56802 19.229 9.67189 19.4375 9.81359C19.6459 9.95528 19.8209 10.132 19.9523 10.3336C20.0837 10.5353 20.169 10.7579 20.2034 10.9887C20.2377 11.2195 20.2205 11.4541 20.1525 11.6791L19.8077 12.8379L19.1971 14.8753Z" fill="#004A77" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
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

        $('#fingerbox').on('touchend', e => {
          $('#fingerbox').remove()
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
  font-size: 1.3em
.msg
  color: #fff
  font-weight: lighter
  letter-spacing: 1.5px
  line-height: 1.6
  border-style: solid
  border-color: #fff
  border-width: 0 1px

@media screen and (min-width: $bp-pc)
  #sec2
    @include lish2pcW
    padding: 8vh 0
  .pc_pic
    width: 100%
    img
      width: 100%
  .title
    margin: 0 0 3vw
  .msg
    font-size: 14px
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

  .title
    margin: 10vw 0 5vw
  .msg
    font-size: 14px
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
    top: 18px
    width: 8vw
    opacity: 1
    // position: absolute
    animation: move 2s ease-in-out infinite alternate-reverse

  @keyframes move
    0%
      transform: translateX(0)
    to
      transform: translateX(-50%)

</style>
