<template>
  <div class="home no-padding-top">
    <img src="../projects/lishu2/all/mrt.png" id="mrt" />
    <div class="water_fixed">
      <water class="water" />
    </div>
    <!-- <div class="water_mo" v-if="isMobile">
      <water class="water" />
    </div> -->
    <Loading :loading="load" />
    <SideNavigation v-if="isSide" />
    <Navigation v-if="!isMobile" />
    <MClose v-else />
    <!-- <Indigator :viewIndex="viewIndex" /> -->
    <!-- <full-page
      ref="fullPage"
      :options="options"
      id="fullpage"
    > -->
    <!-- <vue-lazy-component class="section" id="sectionDe" @init="init">
      <SwiperDemo />
    </vue-lazy-component>
    <div class="sbg">
      <img class="is_mb" src="../projects/lishu2/all/sbg_mb.png" />
      <img class="is_pc" src="../projects/lishu2/all/sbg_pc.png" />
    </div> -->
   <vue-lazy-component class="section" id="section1" style="" @init="init">
      <S1 />
    </vue-lazy-component> 
    <vue-lazy-component class="section" id="section2" @init="init">
      <S2 />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="section3" @init="init">
      <S3 />
    </vue-lazy-component>
    <!-- <vue-lazy-component class="section" id="section4" @init="init">
      <S4 />
    </vue-lazy-component> -->
    <!-- <vue-lazy-component class="section" id="section5" @init="init">
      <S5 />
    </vue-lazy-component> -->
    <!-- <vue-lazy-component class="section" id="section6" @init="init">
      <S6 />
    </vue-lazy-component> -->
    <!-- <vue-lazy-component class="section" id="section7" @init="init">
      <S7 />
    </vue-lazy-component> -->
    <!--vue-lazy-component class="section" id="section8" @init="init">
      <S8 />
    </vue-lazy-component-->
    <!-- <vue-lazy-component class="section" id="section9" @init="init">
      <S9 />
    </vue-lazy-component> -->
    <vue-lazy-component class="section" id="contact">
      <ContactSection />
    </vue-lazy-component>
    <!-- ======================== -->
    <MobileNav />
  </div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery'
import water from '@/projects/lishu2/water.vue'
import Navigation from '@/layouts/Navigation.vue'
import { isMobile } from '@/utils'
import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
// import Indigator from '@/components/Indigator.vue'
// import SwiperDemo from '@/projects/lishu2/swiperDemo_S7_single.vue'
import MClose from '@/projects/lishu2/MClose.vue'
import S1 from '@/projects/lishu2/S1.vue'
import S2 from '@/projects/lishu2/S2.vue'
import S3 from '@/projects/lishu2/S3.vue'
import S4 from '@/projects/lishu2/S4.vue'
import S5 from '@/projects/lishu2/S5.vue'
// import S6 from '@/projects/lishu2/S6.vue'
import S7 from '@/projects/lishu2/S7.vue'
//import S8 from '@/projects/lishu2/S8.vue'
import S9 from '@/projects/lishu2/S9.vue'

export default {
  name: 'home',
  components: {
    water,
    Loading,
    // Indigator,
    Navigation,
    SideNavigation,
    ContactSection,
    MobileNav,
    // SwiperDemo,
    MClose,
    S1,
    S2,
    S3,
    S4,
    S5,
    // S6,
    S7,
    //S8,
    S9
  },

  data() {
    return {
      isMobile,
      isSide: false,
      load: true,
    }
  },
  created() {
    $(document).ready(() => {
      // Images loaded is zero because we're going to process a new set of images.
      var imagesLoaded = 0
      // Total images is still the total number of <img> elements on the page.
      var totalImages = $('img').length

      const allImagesLoaded = () => {
        this.load = false
      }
      const imageLoaded = () => {
        imagesLoaded++
        if (imagesLoaded === totalImages) {
          allImagesLoaded()
        }
      }
      $('img').each(function(idx, img) {
        $('<img>')
          .on('load', imageLoaded)
          .attr('src', $(img).attr('src'))
      })

      let start = 0;
      let end = 0;
      setTimeout(()=>{
        const h1 = $("#section1").height();
        const h2 = $("#section2").height();
        const h3 = $("#section3").height();
        const h4 = $("#section4").height();
        const h5 = $("#section5").height();
        const h6 = $("#section6").height();
        const h7 = $("#section7").height();
        start = h1 + h2;
        end = start + h3 + h4 + h5 + h6 + h7;
        console.log("h1 is", h1, ' / h2 is ', h2, ' / start is ', start, ' / end is ', end);
      }, 1000);
      $(window).scroll(()=>{
        const st = $(window).scrollTop();
        // console.log(st);
        switch(true){
          case st < start:
            // console.log("< start, absoulte start");
            $('.sbg').removeAttr('style').css('top', start);
            break;
          case st >= start && st < end:
            // console.log('fixed');
            $('.sbg').removeAttr('style').css({'position': 'fixed', 'top': 0});
            break;
          case st >= end:
            // console.log("> end, absolute end");
            $('.sbg').removeAttr('style').css('top', end);
            break;
          default:
        }
      })
    })
  },
  mounted() {
  },
  methods: {
    init() {}
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC')
@import "src/assets/style/myvar"
*
  font-family: "Noto Serif TC", serif !important
  letter-spacing: 1px
  // Noto Sans CJK TC  粗細Regular 400
  // Noto Serif CJK TC  粗細Regular 400  Bold 700
body, html
  background-color: #004A77
section
  // overflow: visible
  position: relative
.sbg
  width: 100vw
  position: absolute
  img
    width: 100%
.water_fixed
  position: fixed
  z-index: 0
  left: 0
  top: 0
  width: 100%
  height: 100vh
  min-height: calc(100vw * 900 / 1920)
  max-height: calc(100vw * 1080 / 1920)
.water
  position: absolute
  left: 0vw
  top: calc(50% - 11vw)
  width:100vw

#mrt
  position: fixed
  z-index: 99
  left: 0
  top: 0

@media screen and (min-width: $bp-pc)
  #mrt
    height: 10vw
  .sbg
    height: 100vh
    display: flex
    align-items: flex-end
    .is_mb
      display: none
@media screen and (max-width: $bp-mb)
  #mrt
    height: 30vw
  .sbg
    .is_pc
      display: none

  .water_fixed
    min-height: calc(100vw * 667 / 375)
    max-height: calc(100vw * 812 / 375)
    .water
      top: calc(50% - 40vw)
      left: -30vw
      width:200vw
      transform: rotate(-35deg)
      
  .water_mo
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: calc(100vw * 443 / 375)
    min-height: 0
    max-height: calc(100vw * 812 / 375)
    background: linear-gradient(to bottom,  #004A77FF 80%, #004A77BB 100%)
</style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
@import '../assets/style/variableColor.scss';

.section,
.section .fp-slide,
.section .fp-tableCell {
  height: auto !important;
}

</style>
