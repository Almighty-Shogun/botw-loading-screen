<script>
export default {

  name: "Shrines",

  props: {
    shrines: {
      type: Number,
      required: true
    }
  },

  render(h) {
    return h('div', { class: "statistic-component" }, [
      this.shrines,
      h('div', { class: "statistics-icon" },[
        h('img', {
          attrs: {
            src: require(`@/assets/images/icons/shrine.png`),
            alt: "Shrines icon"
          }
        })
      ])
    ])
  }
}
</script>