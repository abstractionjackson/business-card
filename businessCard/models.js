// businessCard.js
import { cardStyles, textStyles, containerStyles } from './styles.js'
import { formatPhoneNumber } from './utils.js'

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

    const phoneNumber = this.getAttribute('phone')
    const phoneNumberF = formatPhoneNumber(phoneNumber)
    const phone = this.createTextElement('a', phoneNumberF, textStyles.phone)
    phone.setAttribute('href', `tel:+1${phoneNumber}`) //USA

    const company = this.createTextElement(
      'p',
      this.getAttribute('company'),
      textStyles.company,
    )
    const nameAndTitleContainer = document.createElement('div')
    this.applyStyles(nameAndTitleContainer, containerStyles.nameAndTitle)

    const nameLast = this.createTextElement(
      'span',
      this.getAttribute('name').split(' ').pop(),
      textStyles.name.last,
    )
    const name = this.createTextElement(
      'span',
      this.getAttribute('name').split(' ').slice(0, -1).join(' '),
      textStyles.name.ante,
    )
    const nameHeading = document.createElement('h1')
    this.applyStyles(nameHeading, textStyles.name.heading)
    const title = this.createTextElement(
      'p',
      this.getAttribute('title'),
      textStyles.title,
    )

    nameHeading.appendChild(name)
    nameHeading.appendChild(nameLast)
    nameAndTitleContainer.appendChild(nameHeading)
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
