<script>
export default {
  props: {
    text: String,
    level: [String, Number]
  },
  render (createElement) {
    const level = this.level || 1

    return createElement(
      `h${level}`,
      { class: 'ui-title' },
      this.$slots.default
    )
  }
}
</script>

<style lang="scss">
  .ui-title {
    font-weight: bold;
    font-size: 18px;
    color: $site-primary-color;

    a {
      opacity: 1;
    }
  }

  h3.ui-title {
    font-size: 14px;
  }

  h4.ui-title {
    font-size: 12px;
  }
</style>
