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
        >三面臨路朗闊基地 大尺度面寬對坐水岸</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >【萊茵水花園】717坪水岸景觀頭等艙，外觀快意簡筆的白色框架，將三重水岸輸入國際品味，與層層向上彷若展翅的俐落線條美學，讓水岸飯店的質地，透過當代簡約風格融為一體，藍帶、綠帶交會水岸城市的溫柔光陰與寧靜層次，框聚屬於新世代對未來生活的美好渴望。</p>
        <!-- 2 -->
        <h2
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >水岸新標竿 黃金級綠建築&黃金級智慧建築</h2>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >珍惜地球資源，以人為本思考未來居住的樣貌，【萊茵水花園】樹立三重水岸建築新標竿，預計取得即便在台北市中心亦少見的「黃金級」綠建築標章，與自然循環共享、與生態永續共存，創造社區百年價值；更預計取得「黃金級」智慧建築標章認證，安全、健康、便利、舒適、節能，對位國際一線大城。</p>
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
@import ./sass/share
// ====================================
// == TEXT
// ====================================
.sec8
  // background: #004A77BB
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
        size: 1.5em
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
      font-size: 15px
    p
      font-size: 3.2vw
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
