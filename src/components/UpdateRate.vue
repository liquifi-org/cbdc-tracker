<template>
  <div class="ui-update-rate"
       :class="{'increased': isIncreased, 'decreased': !isIncreased}"
       :title="title">
    <div v-for="(monthValue, index) in value" :key="index"
         class="ui-update-rate_month"
         :style="{'height': getMonthHeight(monthValue)}"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Array
  },
  computed: {
    isIncreased () {
      const oldValue = this.value[this.value.length - 2]
      const newValue = this.value[this.value.length - 1]

      return (oldValue < newValue)
    },
    title () {
      return this.isIncreased ? 'Increased' : 'Decreased'
    }
  },
  methods: {
    getMonthHeight (monthValue) {
      const value = monthValue + 1
      const division = (100 / 11)

      return `${value * division}%`
    }
  }
}
</script>

<style lang="scss">
  .ui-update-rate {
    display: flex;
    flex-direction: row;
    height: 20px;
    width: 70px;
    justify-content: space-between;
    align-items: flex-end;

    .ui-update-rate_month {
      width: 4px;
    }

    &.increased {
      .ui-update-rate_month {
        background-color: #6BBEAF;
      }
    }

    &.decreased {
      .ui-update-rate_month {
        background-color: #EC8596;
      }
    }
  }
</style>
