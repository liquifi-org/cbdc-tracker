<template>
  <footer>
    <TagList :items="tags" :isLinks="true"></TagList>
  </footer>
</template>

<script>
import TagList from '@/components/currencyTags/CurrencyTagList'

export default {
  components: {
    TagList
  },
  props: {
    data: Object
  },
  computed: {
    tags () {
      return this.data.currencyTags
    }
  }
}
</script>
