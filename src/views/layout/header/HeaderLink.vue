<template>
  <div class="ui-header-link">
    <router-link v-if="route" :to="route" @click.native="onClick">
      {{text}}
    </router-link>

    <a v-if="href" :href="href" download @click="onClick">
      {{text}}
    </a>

    <div>
      <div class="ui-header-link_border"></div>
      <div class="ui-header-link_border-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    route: String,
    href: String,
    text: String
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.ui-header-link {
  display: flex;
  flex-direction: column;

  .ui-header-link_border {
    height: 3px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 3px;
    opacity: 0;
  }

  .ui-header-link_border-circle {
    background-color: #FFFFFF;
    border-radius: 100%;
    height: 3px;
    width: 3px;
    margin-top: -3px;
    float: right;
    opacity: 0;
  }

  a {
    font-weight: 800;
    font-size: 14px;
    color: #FFFFFF;

    &:hover {
      color: #FFFFFF;
      text-decoration-line: none;
    }
  }

  &:hover {
    a {
      color: #FFFFFF;
    }

    .ui-header-link_border {
      opacity: .5;
    }

    .ui-header-link_border-circle {
      opacity: 1;
    }
  }

  @media (max-width: $max-mobile-width) {
    a {
      font-weight: 900;
      font-size: 18px;
    }

    &:hover {
      .ui-header-link_border, .ui-header-link_border-circle {
        opacity: 0;
      }
    }
  }
}
</style>
