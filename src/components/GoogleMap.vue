<template>
  <div class="google-map" id="google-map">
    <iframe
      title="googlemap"
      :src="googleSrc"
      width="100%"
      height="555"
      frameborder="0"
      style="border: 0"
      allowfullscreen
    />
  </div>
</template>
<script>
import info from '@/info'
import { isMobile } from '@/utils'
export default {
  name: 'googleMap',
  data() {
    return {
      isMobile,
      googleSrc: info.googleSrc,
    }
  },
}
</script>

<style lang="scss" scoped>
.google-map {
  display: flex;
  position: relative;
  iframe {
    flex: 1;
    order: 2;
  }
}

@media screen and (max-width: 767px) {
  .google-map {
    flex-wrap: wrap;
  }
}
</style>
