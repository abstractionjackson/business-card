
customElements.define('business-card',
class extends HTMLElement {
    constructor() {
        super()

        const template = document.getElementById('business-card')
        const templatecontent = template.content

        this.attachShadow({mode: 'open'}).appendChild(templatecontent.cloneNode(true))

        // set the first and last name from #name-first, #name-last
        this.shadowRoot.querySelector('#name-first').textContent = this.getAttribute('first')
        this.shadowRoot.querySelector('#name-last').textContent = this.getAttribute('last')
    }
})