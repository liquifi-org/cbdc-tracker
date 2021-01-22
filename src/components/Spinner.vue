<template>
  <div class="ui-spinner">
    <div>
      <b-spinner class="m-r-8"></b-spinner><span>{{localText}}</span>
    </div>

    <div v-if="hint" class="ui-spinner_hint">{{localHint}}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    hint: String
  },
  computed: {
    localText () {
      return this.text || 'Loading...'
    },
    localHint () {
      return this.hint || ''
    }
  }
}
</script>

<style lang="scss">
  .ui-spinner {
    font-weight: bold;
    font-size: 18px;
    color: $site-primary-color;
    text-align: center;
    padding: 16px;

    .spinner-border {
      width: 18px;
      height: 18px;
    }

    .ui-spinner_hint {
      color: #7997C4;
      font-size: 14px;
      margin: 8px;
    }
  }
</style>
