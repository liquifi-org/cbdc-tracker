<script>
export default {
  props: {
    data: Object,
    label: String,
    disabled: Boolean,
    value: null,
    placeholder: String,
    required: Boolean,
    state: Boolean
  },
  computed: {
    localValue () {
      return this.value || (this.data && this.data.value)
    },
    localLabel () {
      return this.label || (this.data && this.data.label)
    },
    localPlaceholder () {
      return this.placeholder || (this.data && this.data.placeholder)
    }
  },
  methods: {
    validate () {
      return this.required ? !!this.localValue : true
    }
  }
}
</script>
