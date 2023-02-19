<script>
export default {

  name: "Rupees",

  props: {
    rupees: {
      type: Number|String,
      required: true
    }
  },

  render(h) {
    return h('div', { class: "statistic-component" }, [
      this.rupees,
      h('div', { class: "statistics-icon" },[
        h('img', {
          attrs: {
            src: require(`@/assets/images/icons/rupee.png`),
            alt: "Rupee icon"
          }
        })
      ])
    ])
  }
}
</script>