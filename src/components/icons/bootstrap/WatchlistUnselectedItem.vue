<template>
  <b-icon icon="star" :title="text || 'Have not in the watchlist'"></b-icon>
</template>

<script>
import BaseCell from '../BaseIconWrapper'

export default {
  extends: BaseCell
}
</script>
