// businessCard.js
import { avatarStyles, templateStyles } from './styles.js'
import { getTemplate } from './templates.js'
import { formatPhoneNumber, getStaticProperties } from './utils.js'

export class BusinessCard extends HTMLElement {
  static full_name
  static phone
  static company_name
  static job_title
  static email
  // static linkedin
  static avatar

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
    this.template = getTemplate()
    this.applyStyles(this.template, templateStyles)

    for (const prop of getStaticProperties(BusinessCard)) {
      this.template.appendChild(this[prop])
    }
  }
  get phone() {
    const link = document.createElement('a')
    if (!this._phone) {
      link.hidden = true
      return link
    }
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
  get full_name() {
    const span = document.createElement('span')
    span.innerText = this._full_name
    return span
  }
  set full_name(value) {
    this._full_name = value
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
  get avatar() {
    const img = document.createElement('img')
    img.src = this._avatar
    this.applyStyles(img, avatarStyles)
    return img
  }
  set avatar(value) {
    this._avatar = value
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
