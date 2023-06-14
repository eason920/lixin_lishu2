<template>
  <div class="dialog-content">
    <font-awesome-icon icon="phone" />
    <div class="dialog-desc">賞屋專線</div>
    <div class="info">{{phone}}</div>
    <div class="cta" v-if="isMobile" @click="redirectToPhoneThanks">撥打電話</div>
  </div>
</template>

<script>
import { isMobile } from '@/utils'
export default {
  name: 'CallDialog',
  components: {},
  data() {
    return {
      isMobile
    }
  },
  props: ['phone'],

  methods: {
    redirectToPhoneThanks(e) {
      e.preventDefault()
      window.location.href = `tel:${this.phone.replace('-', '')}`
      setTimeout(() => {
        window.location.href = 'phoneThanks'
      }, 1000)
    },
  },
}
</script>
