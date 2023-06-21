<template>
    <div class="ball" data-aos-once="false" data-aos="fade-in" data-aos-delay="0" data-aos-duration="1400">
        <div class="ball_wave">
            <img src="./all/ball.png" />
        </div>
    </div>
</template>

<style lang="sass" scoped>
@keyframes aniWave
  to
    transform: translateY(0)
.ball_wave
  height: 100%
  width: 100%
  transform: translateY(100%)
  animation: aniWave 3s ease-in-out infinite alternate
  img
    width: 100%
</style>
