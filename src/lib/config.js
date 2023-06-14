import info from '../info/index.js'

const fadeOption = (origin, duration, delay, distance) => ({
  origin,
  delay,
  distance: `${distance}px`,
  duration,
  viewOffset: {
    top: -100,
    right: 0,
    bottom: 0,
    left: 0
  }
})

export default {
  install(Vue, options) {
    Vue.prototype.$fadeIn = (delay = 0, duration = 2000, distance = 0) =>
      fadeOption('bottom', duration, delay, distance)
    Vue.prototype.$fadeInUp = (delay = 0, duration = 2000, distance = 30) =>
      fadeOption('bottom', duration, delay, distance)

    Vue.prototype.$fadeInDown = (delay = 0, duration = 2000, distance = 30) =>
      fadeOption('top', duration, delay, distance)

    Vue.prototype.$fadeInRight = (delay = 0, duration = 2000, distance = 30) =>
      fadeOption('left', duration, delay, distance)

    Vue.prototype.$fadeInLeft = (delay = 0, duration = 2000, distance = 30) =>
      fadeOption('right', duration, delay, distance)

    Vue.prototype.$gtmCode = info.gtmCode

    // Vue.prototype.showFootTab = {
    //   isShow: false,
    //   active: 0
    // }
  }
}
