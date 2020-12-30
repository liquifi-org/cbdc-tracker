<template>
  <b-icon icon="arrow-left-circle" :title="text || 'Back to page'"></b-icon>
</template>

<script>
import BaseCell from '../BaseIconWrapper'

export default {
  extends: BaseCell
}
</script>
