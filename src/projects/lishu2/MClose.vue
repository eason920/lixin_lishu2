<template>
  <div>
    <div id="lbMasker" v-if="bIsOpen" @click="toggleSidebar">
      <ul>
        <li
          data-aos="fade-up"
          :data-aos-delay="150 * i"
          :key="item.name"
          v-scroll-to="{
            element: `#${item.section}`,
            offset: item.offset ? item.offset : offset
          }"
          v-for="(item, i) in list"
        >
          <a href="#" @click.prevent="">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <!-- <div id="lbswitch" :class="[{ open: bIsOpen }]" @click="bIsOpen = !bIsOpen">
      <div class="lbswitch-wrapper">
        <div class="lbswitch-line is-tb"></div>
        <div class="lbswitch-line is-m"></div>
        <div class="lbswitch-line is-m2"></div>
        <div class="lbswitch-line is-tb"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import navList from '@/info/navList'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      isTablet,
      list: navList,
      bIsOpen: false
    }
  },

  methods: {
    toggleSidebar() {
      console.log('got fnb')
      this.bIsOpen = !this.bIsOpen
    }
  },

  created() {},

  mounted() {},

  computed: {
    offset() {
      if (this.isMobile) {
        return -39
      }

      if (this.isTablet) {
        return -45
      }

      return -56
    }
  }
}
</script>

<style lang="sass">
body.fixed
  overflow: hidden
</style>

<style lang="sass" scoped>
#lbMasker
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  margin: auto
  z-index: 99
  animation: start 1s linear forwards
  &:before, &:after
    content: ""
    display: block
    position: absolute
    top: 0
    bottom: 0
    margin: auto
  &:before
    left: 10vw
    right: 10vw
  &:after
    left: 20vw
    right: 20vw
  ul
    padding-top: 5vh
    position: relative
    z-index: 1
  a
    text-decoration: none
    padding: 3vh 0
    display: block
    color: #000
    font-size: 20px
#lbMasker,
#lbMasker:before,
#lbMasker:after
  background-color: rgba(255,255,255,.6)

@keyframes start
  0%
    opacity: 0
  100%
    opacity: 1
//-------------
#lbswitch
  top: 20px
  right: 20px
  left: auto
  z-index: 100
  position: fixed
  top: 2.5vw
  right: 3.5vw
  width: 45px
  height: 45px
  cursor: pointer

.lbswitch-wrapper
  position: absolute
  top: 0
  bottom: 0
  right: 0
  left: 0
  display: flex
  justify-content: space-between
  margin: auto
  width: 35px
  height: 35px
  flex-direction: column

.lbswitch-line
  position: relative
  margin: auto
  width: 100%
  height: 1px
  background: rgba(255,255,255, .5)
  //
  transform: scaleX(1)
  opacity: 1
  transition: 1s
  &.is-m2
    // opacity: 0
    position: absolute
    transform-origin: 50% 50%
    top: calc(50% - 1px)

.open
  .is-tb
    transform: scaleX(2)
    opacity: 0
  .is-m
    transform: rotate(45deg)
    background-color: #c19943
  .is-m2
    transform: rotate(-45deg)
    background-color: #c19943
</style>
