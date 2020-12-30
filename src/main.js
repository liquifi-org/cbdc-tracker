import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/src/icons.scss'
import './mixins/globals'
import './components/globals'
import { SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES } from '@/store/saveUserSettingsPlugin/constants'
import VueMeta from 'vue-meta'

// Install BootstrapVue
Vue.use(BootstrapVue, {
  breakpoints: [
    'xs',
    'sm',
    'md', // mobile
    'lg',
    'xl', // tablet
    'xxl' // desktop
  ]
})
Vue.use(BootstrapVueIcons)

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate () {
    this.$store.commit(SAVE_USER_SETTING_PLUGIN_MUTATION_TYPES.INITIALIZE_LOAD_SAVED_DATA)
  },
  render: h => h(App)
}).$mount('#app')
