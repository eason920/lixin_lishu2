<template>
    <div class="ball" data-aos-once="false" data-aos="fade-in" data-aos-delay="0" data-aos-duration="1400">
        <div class="ball_wave">
            <img src="./all/ball.png" />
        </div>
    </div>
</template>

<style lang="sass" scoped>
@keyframes aniWave
  0%
    transform: translateY(-5px)
  50%
    transform: translateY(5px)
  100%
    transform: translateY(-5px)

.ball_wave
  height: 100%
  width: 100%
  transform: translateY(-5px)
  animation: aniWave 3s infinite forwards
  img
    width: 100%
</style>
