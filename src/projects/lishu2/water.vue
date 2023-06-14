<template>
    <div class="water">
        <div class="anwater6">
            <img loading="lazy" src="./all/w3.png" />
            <img loading="lazy" src="./all/w3.png" />
        </div>
        <div class="anwater2">
            <img loading="lazy" src="./all/w4.png" />
            <img loading="lazy" src="./all/w4.png" />
        </div>
        <div class="anwater5">
            <img loading="lazy" src="./all/w4.png" />
            <img loading="lazy" src="./all/w4.png" />
        </div>
       <div class="anwater4">
            <img loading="lazy" src="./all/w1.png" />
            <img loading="lazy" src="./all/w1.png" />
        </div>
        <div class="anwater3">
            <img loading="lazy" src="./all/w3.png" />
            <img loading="lazy" src="./all/w3.png" />
        </div>
       <div class="anwater1">
            <img loading="lazy" src="./all/w1.png" />
            <img loading="lazy" src="./all/w1.png" />
        </div>
       <!--   --> 
    </div>
</template>

<style lang="sass" scoped>
@keyframes aniWater
  50%
    //transform: translateX(-50%)skewX(20deg)
  to
    //transform: translateX(0)
.water
  position: relative
  .anwater1,.anwater2,.anwater3,.anwater4,.anwater5,.anwater6
    position: absolute
    top: 0
    left: 0
    width: 200%
    img
      animation: aniWater 20s linear infinite 
      width: 50%
      transform: translateX(-100%)
  .anwater1
    position: relative
    transform: rotate(-1deg) translateY(0%)
  .anwater2
    transform: rotate(15deg) translateY(30%)
    width: 270%
    filter: blur(3px)
    opacity: .8
    img
      animation-duration: 25s
  .anwater3
    transform: rotate(5deg) translateY(10%)
    opacity: .5
      filter: blur(1px)
    img
      animation-duration: 28s
  .anwater4
    transform: rotate(-8deg) translateY(-42%)
    opacity: .5
    mix-blend-mode: screen
    img
      animation-duration: 31s
  .anwater5
    transform: rotate(23deg) translateY(60%)
    opacity: .5
    mix-blend-mode: screen
    filter: blur(3px)
    img
      animation-duration: 29s
  .anwater6
    transform: rotate(-11deg) translateY(-50%)
    opacity: .5
    filter: blur(2px)
    mix-blend-mode: screen
    img
      animation-duration: 31s
</style>
