<template>
  <div class="relative">
    <section id="sec11">
    <water class="water" />
    <div class="logo">
        <div class="aos"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >
          <img loading="lazy" src="./S11/logo.png" />
        </div>
      </div>
      <div class="subtitle">
        <div class="aos"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-offset="-300"
        >
          <img loading="lazy" src="./S11/subtitle.png" />
        </div>
      </div>
      <ball class="ball is1" />
      <ball2 class="ball is2" />
    </section>
  </div>
</template>

<style lang="sass" scoped>
@import "src/assets/style/myvar"
#sec11
  position: relative
  background:
    color: #004A77
    // image: url(./S11/bg.png)
    repeat: no-repeat
    position: center bottom
    size: contain
  img
    width: 100%
  &::before
    position: absolute
    z-index: 1
    content: ""
    display: block
    height: 20vw
    width: 100%
    background: linear-gradient(to top,  #004A77FF 0%, #004A7700 100%)
    bottom: 0
    left: 0

.logo, .subtitle
  position: absolute
  left: 50%
  transform: translateX(-50%)
  z-index:3
.aos
  width: 100%

  
.water
  position: absolute
  left: 0vw
  top: auto
  bottom: -3vw
  width: 100vw
 
@media screen and (min-width: $bp-pc)
  #sec11
    height: 55vw
  .logo
    width: 36vw
    top: 9vw
  .subtitle
    width: 30vw
    bottom: 19vw
@media screen and (max-width: $bp-mb)
  #sec11
    height: 160vw
    background:
      size: 250% auto
  .logo
    width: 80vw
    top: 21vw
  .subtitle
    width: 80vw
    bottom: 75vw

// ====================================
// == ball
// ====================================
.ball
  position: absolute
  z-index: 3
  &.is1
    width: 35px
    height: 35px
    left: 15vw
    top: 25vw
  &.is2
    width: 60px
    height: 60px
    right: 13vw
    bottom: 10vw
@media screen and (max-width: $bp-mb)
  .ball
    &.is1
      left: 9vw
      top: 108vw
    &.is2
      right: 4vw
      bottom: 14vw
  .water
    left: -80vw
    width:250vw
    bottom: 5vw
    opacity: .7
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import water from './water.vue'
import ball from './ball.vue'
import ball2 from './ball2.vue'
export default {
  name: 'S8',
  components: {
    water,
    ball,
    ball2
  },
  data() {
    return {
      isMobile,
      isTablet
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {}
}
</script>
