<script>
export default {

  name: "Hearts",

  render(h) {
    return h('img', {
      attrs: {
        src: require(`@/assets/images/icons/heart.png`),
        alt: "Heart icon"
      },
      class: "statistics-icon heart"
    })
  }
}
</script>