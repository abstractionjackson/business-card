// businessCard.js
import { cardStyles, textStyles, containerStyles } from './styles.js'

export class BusinessCard extends HTMLElement {
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
    const card = document.createElement('div')
    this.applyStyles(card, cardStyles)

    const phone = this.createTextElement(
      'p',
      this.getAttribute('phone'),
      textStyles.phone,
    )
    const company = this.createTextElement(
      'p',
      this.getAttribute('company'),
      textStyles.company,
    )
    const nameAndTitleContainer = document.createElement('div')
    this.applyStyles(nameAndTitleContainer, containerStyles.nameAndTitle)

    const name = this.createTextElement(
      'h1',
      this.getAttribute('name'),
      textStyles.name,
    )
    const title = this.createTextElement(
      'p',
      this.getAttribute('title'),
      textStyles.title,
    )

    nameAndTitleContainer.appendChild(name)
    nameAndTitleContainer.appendChild(title)
    card.appendChild(phone)
    card.appendChild(company)
    card.appendChild(nameAndTitleContainer)

    this.shadowRoot.appendChild(card)
  }

  createTextElement(tag, text, styles) {
    const element = document.createElement(tag)
    element.textContent = text
    this.applyStyles(element, styles)
    return element
  }
}
