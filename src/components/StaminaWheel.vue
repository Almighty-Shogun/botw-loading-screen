<script>
export default {

  name: "StaminaWheel",

  render(h) {
    return h('img', {
      attrs: {
        src: require(`@/assets/images/icons/stamina.png`),
        alt: "Stamina wheel icon"
      },
      class: "statistics-icon stamina-wheel"
    })
  }
}
</script>