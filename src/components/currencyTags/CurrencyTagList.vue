<template>
  <div>
    <Tag ref="tags" v-for="(item, index) in items" :key="index"
             :data="item"
             :isSelectable="isSelectable"
             :isLinks="isLinks"
             @change="onTagChange"
    ></Tag>
  </div>
</template>

<script>
import Tag from './CurrencyTag'

export default {
  components: {
    Tag
  },
  props: {
    items: Array,
    isSelectable: Boolean,
    isLinks: Boolean,
    disabled: Boolean
  },
  methods: {
    onTagChange () {
      const selectedTags = this.$refs.tags.filter((tag) => {
        return tag.localIsSelected
      }).map((tag) => {
        return {
          country: tag.data.country,
          currency: tag.data.currency,
          name: tag.data.name
        }
      })

      this.$emit('changeIsSelected', selectedTags)
    }
  }
}
</script>
