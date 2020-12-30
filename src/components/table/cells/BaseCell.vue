<script>
export default {
  props: {
    data: Object
  },
  computed: {
    row () {
      return this.data.item
    },
    cell () {
      const name = this.data.field.name
      return this.row.cells[name]
    },
    displayData () {
      return this.cell.displayData
    }
  }
}
</script>
