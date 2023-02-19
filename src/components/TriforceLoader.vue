<script>
export default {

  name: "TriforceLoader",

  render(h) {
    return h('div', { class: "circles" }, [
        h('div', { class: "circle circle-1" }),
        h('div', { class: "circle circle-2" }),
        h('div', { class: "circle circle-3" }),
        h('div', { class: "circle circle-4" }),
        h('div', { class: "circle circle-5" }),
        h('div', { class: "circle circle-6" })
    ])
  }
}
</script>