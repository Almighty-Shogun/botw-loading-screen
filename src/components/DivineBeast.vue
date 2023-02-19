<script>
export default {

  name: "DivineBeast",

  props: {
    beast: {
      type: String,
      required: true
    }
  },

  render(h) {

    const divineBeast = this.beast.toLowerCase();

    return h('img', {
      attrs: {
        src: require(`@/assets/images/divine_beasts/vah-${divineBeast}.png`),
        alt: `Divine Beast Vah ${divineBeast} icon.`,
      },
      class: `vah-${divineBeast}`,
    })
  }
}
</script>