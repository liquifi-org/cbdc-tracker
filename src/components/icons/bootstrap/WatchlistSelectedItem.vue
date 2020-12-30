<template>
  <b-icon icon="star-fill" :title="text || 'Have in the watchlist'"></b-icon>
</template>

<script>
import BaseCell from '../BaseIconWrapper'

export default {
  extends: BaseCell
}
</script>
