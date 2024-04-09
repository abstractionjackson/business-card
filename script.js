
customElements.define('business-card',
class extends HTMLElement {
    constructor() {
        super()

        const template = document.getElementById('business-card')
        const templatecontent = template.content

        this.attachShadow({mode: 'open'}).appendChild(templatecontent.cloneNode(true))
    }
})