import Vue from 'vue'
import { setIdMixin } from '@/mixins/setId.mixin'
import { globalVariablesMixin } from '@/mixins/globalVariables.mixin'

export const GLOBAL_MIXINS = [setIdMixin, globalVariablesMixin]

GLOBAL_MIXINS.forEach((mixin) => {
  Vue.mixin(mixin)
})
