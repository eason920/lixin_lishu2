<template>
  <div class="relative sec8">
    <section id="sec8">
      <sw />
      <div class="text">
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >三面臨路 大尺度對坐水岸</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >717坪寬域尺度，完整享有水岸大景，洗鍊的白色框架，層層向上的俐落語彙，是當代建築的質地，綠意盎然，水岸粼粼，建築量體的虛與實之間，與光影，與自然，寧靜對話。
</p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >黃金級 綠建築&智慧建築</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >我們都不想地球暖化，就先從智慧化的綠建築開始預計取得「黃金級」綠建築標章，建築本體資源循環共享，尊重生態，預計取得「黃金級」智慧建築標章認證，安全、健康、便利、舒適、節能，同步全球為地球降溫。</p>
      </div>
      
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import sw from './S8swiper.vue'
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'swiper-example-thumbs-gallery',
  title: 's4',

  components: {
    sw
  },
  data() {
    return {
      vm: this,
      isMobile,
      isTablet
    }
  },

  methods: {
    
  },

  created() {},

  mounted() {},

  computed: {}
}
</script>

<style lang="sass" scoped>
@import "src/assets/style/myvar"
// ====================================
// == TEXT
// ====================================
.sec8
  // background: #004A77BB
  z-index:1
.text
  width: 85vw
  margin: 0 auto
  color: #fff
  h2
    color: $yellow
@media screen and (min-width: $bp-pc)
  $g: 2vw
  .text
    position: relative
    width: 70vw
    display: flex
    flex-wrap: wrap
    // align-content: center
    justify-content: center
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
    p
      margin: 4vw 0 10vw
      &:last-child
        margin:
          bottom: 20vw


// ====================================
// == 架構
// ====================================
#sec8
  position: relative
  display: flex
  flex-direction: column


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


</style>
