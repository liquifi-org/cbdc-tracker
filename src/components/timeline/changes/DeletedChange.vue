<template>
  <div>
    <TimelineLabel :text="change.title"></TimelineLabel> <component :is="valueComponent" :value="change.valueOld"></component>
  </div>
</template>

<script>
import BaseChange from './BaseChange'

export default {
  extends: BaseChange
}
</script>
