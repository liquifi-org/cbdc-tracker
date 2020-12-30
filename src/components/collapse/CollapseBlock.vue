<template>
  <b-collapse :id="id">
    <slot></slot>
  </b-collapse>
</template>

<script>
export default {
  props: {
    id: String
  }
}
</script>
