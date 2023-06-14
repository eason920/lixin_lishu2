import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import '@/assets/style/global.scss'

/* 全局配置 https://blog.csdn.net/FireBird_one/article/details/80295229 */
import config from './lib/config.js'

import 'element-ui/lib/theme-chalk/index.css'
import VueScrollTo from 'vue-scrollto' // scroll 錨點
import VueLazyload from 'vue-lazyload' // 圖片 lazy load
import VueFullPage from 'vue-fullpage.js'
import VueLazyComponent from '@xunlei/vue-lazy-component'
import Vue2TouchEvents from 'vue2-touch-events'
import VueRellax from 'vue-rellax'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faTimes,
  faPhone,
  faPen,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

import AOS from '@/lib/aos/src/js/aos'
import 'aos/dist/aos.css'

import {
  faFacebookMessenger,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSvgIcon from 'vue-svgicon'
import './plugins/element.js'

// AOS.init()

library.add(faBars)
library.add(faTimes)
library.add(faPhone)
library.add(faPen)
library.add(faFacebookMessenger)
library.add(faFacebookF)
library.add(faMapMarkerAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueSvgIcon, {
  tagName: 'icon'
})

Vue.use(VueFullPage)

Vue.use(config)
Vue.use(VueScrollTo)
Vue.use(VueLazyload)
Vue.use(VueLazyComponent)
Vue.use(VueRellax)
Vue.use(Vue2TouchEvents)

new Vue({
  router,
  store,
  methods: {
    // recaptcha() {
    //   this.$recaptchaLoaded('homepage').then((token) => {
    //     console.log(token) // Will print the token
    //   })
    // }
  },
  created() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
