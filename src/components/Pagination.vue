<template>
  <b-pagination class="ui-pagination"
                v-model="localCurrentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                :aria-controls="target"
                align="center"
                @input="onChangePage"
  ></b-pagination>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalRows: Number,
    perPage: Number,
    target: String
  },
  data () {
    return {
      localCurrentPage: this.currentPage
    }
  },
  watch: {
    currentPage (newVal, oldVal) {
      this.localCurrentPage = newVal
    }
  },
  methods: {
    onChangePage (page) {
      this.$emit('pageChanged', page)
    }
  }
}
</script>

<style lang="scss">
  .ui-pagination {
    margin: 12px 0;

    .page-link {
      border: none;
      color: $site-primary-color;
    }

    .page-item > .page-link, .page-item.disabled > .page-link {
      background-color: transparent;
    }

    .page-item.active {
      .page-link {
        background-color: #CDE0F1;
        border-color: #CDE0F1;
        color: $site-primary-color;
      }
    }

    .page-item {
      .page-link {
        border-radius: 6px;
      }
    }

    .page-item.disabled {
      .page-link {
        color: #CDE0F1;
      }
    }
  }
</style>
