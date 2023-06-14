<template>
  <div class="contact" id="contact">
    <Order />
    <HouseInfo />
  </div>
</template>
<style lang="sass" scoped>
@import "src/assets/style/myvar"
#contact
  background-color: #004A77
@media screen and (min-width: $bp-pc)
  #contact
    padding-top: 7vw

@media screen and (max-width: $bp-mb)
  #contact
    padding-top: 20px
</style>

<script>
import Order from '@/components/Order.vue'
import HouseInfo from '@/components/HouseInfo.vue'

export default {
  name: 'contactSection',
  components: {
    Order,
    HouseInfo
  },

  methods: {}
}
</script>
