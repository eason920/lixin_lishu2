<template>
  <div class="house-info" id="house-info">
    <water class="water" />
    <div class="content">
      <div class="logo">
        <div class="logo_box">
          <img class="logo_title" src="@/projects/lishu2/house_info/name.png" />
          <div class="logo_link">
            <a target="_blank" href="https://unigiants.com.tw/"><img src="@/projects/lishu2/house_info/icon1.png"/></a>
            <a target="_blank" href="https://www.facebook.com/unigiant/"><img src="@/projects/lishu2/house_info/icon2.png"/></a>
          </div>
        </div>
        <img v-if="!isMobile" class="logo_logo" src="@/projects/lishu2/house_info/logo.png" />
      </div>
      <div class="msg">
        <h3 class="msg_title">建案資訊</h3>
        <div class="info">
          <div class="item" :key="infos[0]" v-for="infos in houseInfos">
            <h3 class="label">{{ infos[0] }}</h3>
            <p class="desc" v-html="infos[1]"></p>
          </div>
        </div>
        <img v-if="isMobile" class="msg_logo" src="@/projects/lishu2/house_info/logo.png" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import info from '@/info'
import Footer from '@/layouts/Footer.vue'
import { isMobile, isTablet } from '@/utils'
import water from '@/projects/lishu2/water.vue'
export default {
  name: 'houseInfo',
  components: {
    water,
    Footer
  },
  data() {
    return {
      houseInfos: info.houseInfos,
      isMobile
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
@import "@/assets/style/variableColor.scss"
$c: #fff
.house-info
  width: 100vw
  background:
    // image: linear-gradient(180deg, #000308 0%, #003348 100%)
    color: #004A77
    // image: url('../projects/lishu2/S9/bg.png')
    repeat: no-repeat
    position: center bottom
    size: 150% auto
  position: relative
  z-index: 1
  .water
    position: absolute
    left: 0vw
    bottom: 0vw
    width: 100vw
    z-index: -1
    opacity: .6

  .decor-6
    width: 35vw
    bottom: 0
    right: 10vw
    z-index: -1
    img
      width: 100%
.msg
  font:
    size: calc(25 * 100vw / 1920)

.msg_title
  margin-bottom: 0.9em
  font-weight: 500
  color: $c
  font-family: $family3
  text-align: left
  font:
    size: 1.4em

.info
  display: flex
  flex-wrap: wrap
  border-top: solid 1px $c
  width: 100%
  .item
    h3, p
      font-family: "Noto Serif TC", serif !important

.item
  margin-bottom: 0
  margin-right: 0
  width: 100%
  padding-left: 0
  display: flex
  align-items: center
  justify-content: space-between
  white-space: nowrap
  border-bottom: solid 1px $c
  padding: 0.6em 0

  &:nth-of-type(even)
    margin-right: 0

  .label, .desc
    font:
      family: "Noto Sans TC" !important
      size: calc(21 * 100vw / 1920)

  .label
    font-size: 1.7
    font-weight:500
    color: $c
    margin-bottom: 0
    margin-right: 20px
    white-space: nowrap
    font-family: $family3

  .desc
    font-weight:500
    text-align: right
    line-height: 1.4
    color: $c
    font-family: $family3

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px)
  .content
    width: 100%
    margin-bottom: 20px
    padding-bottom: 0

  .msg_title
    font-size: 24px
    margin: 40px 0 24px
    width: 100vw

  .item
    margin-bottom: 20px
    margin-right: 0
    width: 100%
    height: auto
    margin-left: 20px
    white-space: normal

    .label, .desc
      font:
       size: calc(12 * 100vw / 375)
  .house-info .water
    width: 200vw

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px)
  .content
    width: 686px

  .msg_title
    font-size: 24px
    margin: 40px 0 24px

  .item
    margin-bottom: 20px

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px)

// ====================================
// == MY
// ====================================
.content
  width: 80vw
  margin: 0 auto
  display: flex
  justify-content: space-between
  flex-direction: row

.logo
  display: flex
  flex-direction: column
  align-items: flex-start
.logo_box
  display: flex

  .logo_link
    display: flex
    img
      width: 100%

// --------------------------------
// -- MSG
// --------------------------------
.msg
  width: 60%

@media screen and (min-width: 769px)
  .content
    padding:
      top: 12vh
      bottom: 20vh
  .logo_box
    flex-direction: column
  .logo_title
    width: 11vw
    margin-bottom: 1.5vw
  .logo_link
    a
      padding-right: 2vw
      width: 11vw

    a:last-child
      padding-right: 0vw
  .logo_logo
    width: 22vw
    margin-top: 7vw

@media screen and (max-width: 768px)
  .content
    flex-direction: column
    padding:
      top: 8vh
      bottom: 15vh
  .logo_box
    align-items: center
    justify-content: space-between
    width: 100%
  .logo_title
    width: 27vw

  .logo_link
    a
      width: 27vw
      padding-left: 5vw
  // --------------------------------
  .msg
    width: 100%
  .item
    margin: 0
    padding: 10px 0
  .msg_logo
    width: 80%
    margin: 15vw auto 0
</style>
