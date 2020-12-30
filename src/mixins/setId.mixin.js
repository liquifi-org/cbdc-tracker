export const setIdMixin = {
  data () {
    return {
      componentId: null
    }
  },
  mounted () {
    this.componentId = this._uid.toString()
  }
}
