// declare a custom element that clones the template#business-card
// and attaches a shadow DOM

customElements.define(
  'business-card',
  class extends HTMLElement {
    constructor() {
      super()
      const shadow = this.attachShadow({ mode: 'open' })
      const template = document.getElementById('business-card')
      shadow.appendChild(template.content.cloneNode(true))
    }
  },
)
