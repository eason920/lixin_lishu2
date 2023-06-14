import Vue from 'vue'
import {
  Button, Dialog,
  Select,
  Input,
  Option,
  Checkbox,
  TimeSelect,
  Notification,
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/zh-TW'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Button)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Input)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(TimeSelect)

Vue.prototype.$notify = Notification
