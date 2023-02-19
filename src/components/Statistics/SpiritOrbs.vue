<script>
export default {

  name: "SpiritOrbs",

  props: {
    orbs: {
      type: Number,
      required: true
    }
  },

  render(h) {
    return h('div', { class: "statistic-component" }, [
      this.orbs,
      h('div', { class: "statistics-icon" },[
        h('img', {
          attrs: {
            src: require(`@/assets/images/icons/spirit_orb.png`),
            alt: "Spirit orbs icon"
          }
        })
      ])
    ])
  }
}
</script>