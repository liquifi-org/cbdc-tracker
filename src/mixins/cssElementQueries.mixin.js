const ElementQueries = require('css-element-queries/src/ElementQueries')

export const cssElementQueriesMixin = {
  created () {
    ElementQueries.init()
  },
  mounted () {
    const parentNode = this.$el ? this.$el.parentNode : this.parentNode
    return ElementQueries.findElementQueriesElements(parentNode)
  }
}
