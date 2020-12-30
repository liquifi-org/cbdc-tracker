<template>
  <b-icon icon="star" :title="text || 'Watchlist'"></b-icon>
</template>

<script>
import BaseCell from '../BaseIconWrapper'

export default {
  extends: BaseCell
}
</script>
