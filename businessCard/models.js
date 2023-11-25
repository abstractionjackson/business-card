// businessCard.js
import { cardStyles, textStyles, containerStyles } from './styles.js'
import {
  formatPhoneNumber,
  getStaticProperties,
  uuid4 as uuid,
} from './utils.js'

export class BusinessCard extends HTMLElement {
  static name_first
  static name_last
  static phone
  static company_name
  static job_title
  static email
  // static linkedin

  constructor() {
    super()
    // initialize the shadow
    this.attachShadow({ mode: 'open' })
    // instantiate the card from custom element props
    for (const prop of getStaticProperties(BusinessCard)) {
      this[`_${prop}`] = this.getAttribute(prop)
    }
    // initialize the HTML
    this.init()
    // place the HTML on the shadow
    this.shadowRoot.appendChild(this.content)
  }

  init() {
    // Get all HTML Nodes

    // The Content Container
    const contentContainer = this.getContentContainer()

    // Order (?)
    for (const prop of getStaticProperties(BusinessCard)) {
      contentContainer.appendChild(this[prop])
    }

    this.content = contentContainer // assign new static prop (?)

    return contentContainer
  }

  getContentContainer() {
    const el = document.createElement('div')
    el.id = `${uuid()}`
    return el
  }
  get phone() {
    const link = document.createElement('a')
    link.href = `tel:1${this._phone}` // USA
    link.innerText = formatPhoneNumber(this._phone)
    return link
  }
  set phone(value) {
    // TODO - add validation
    this._phone = value
  }
  get email() {
    const link = document.createElement('a')
    link.href = `mailto:${this._email}`
    link.innerText = this._email
    return link
  }
  set email(value) {
    this._email = value
  }
  get name_last() {
    const span = document.createElement('span')
    span.innerText = this._name_last
    return span
  }
  set name_last(value) {
    this._name_last = value
  }
  get name_first() {
    const span = document.createElement('span')
    span.innerText = this._name_first
    return span
  }
  set name_first(value) {
    this._name_first = value
  }
  get job_title() {
    const span = document.createElement('span')
    span.innerText = this._job_title
    return span
  }
  set job_title(value) {
    this._job_title = value
  }
  get company_name() {
    const span = document.createElement('span')
    span.innerText = this._company_name
    return span
  }
  set company_name(value) {
    this._company_name = value
  }
  applyStyles(element, styles) {
    for (const property in styles) {
      element.style[property] = styles[property]
    }
  }
  createTextElement(tag, text, styles) {
    const element = document.createElement(tag)
    element.textContent = text
    this.applyStyles(element, styles)
    return element
  }
}
