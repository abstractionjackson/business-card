class BusinessCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const name = this.getAttribute('name')
    const title = this.getAttribute('title')
    const company = this.getAttribute('company')
    const phone = this.getAttribute('phone')

    this.shadowRoot.innerHTML = `
            <div class="card">
                <h1>${name}</h1>
                <p>${title}</p>
                <p>${company}</p>
                <p>${phone}</p>
            </div>
        `
  }
}

customElements.define('business-card', BusinessCard)
