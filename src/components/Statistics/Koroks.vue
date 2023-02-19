<script>
export default {

  name: "Koroks",

  props: {
    koroks: {
      type: Number,
      required: true
    }
  },

  render(h) {
    return h('div', { class: "statistic-component" }, [
        this.koroks,
        h('div', { class: "statistics-icon" },[
            h('img', {
              attrs: {
                src: require(`@/assets/images/icons/korok.png`),
                alt: "Korok seed icon"
              }
            })
        ])
    ])
  }
}
</script>