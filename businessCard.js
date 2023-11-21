class BusinessCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.createCardContent()
  }

  applyStyles(element, styles) {
    for (const property in styles) {
      element.style[property] = styles[property]
    }
  }

  createCardContent() {
    const cardStyles = {
      fontFamily: 'Helvetica, sans-serif',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 2fr 1fr',
      justifyItems: 'center',
      alignItems: 'center',
      maxWidth: '350px',
      margin: '20px auto',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      backgroundColor: '#fff',
      position: 'relative',
      height: '200px',
    }

    const card = document.createElement('div')
    this.applyStyles(card, cardStyles)

    const phone = this.createTextElement('p', this.getAttribute('phone'), {
      gridColumn: '1',
      gridRow: '1',
      justifySelf: 'start',
    })

    const company = this.createTextElement('p', this.getAttribute('company'), {
      gridColumn: '2',
      gridRow: '1',
      justifySelf: 'end',
    })

    const name = this.createTextElement('h1', this.getAttribute('name'), {
      gridColumn: '1 / -1',
      fontSize: '24px',
      color: 'black',
    })

    const title = this.createTextElement('p', this.getAttribute('title'), {
      gridColumn: '1 / -1',
      fontSize: '18px',
      color: '#444',
    })

    card.appendChild(phone)
    card.appendChild(company)
    card.appendChild(name)
    card.appendChild(title)

    this.shadowRoot.appendChild(card)
  }

  createTextElement(tag, text, styles) {
    const element = document.createElement(tag)
    element.textContent = text
    this.applyStyles(element, styles)
    return element
  }
}

customElements.define('business-card', BusinessCard)
