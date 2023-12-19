import { uuid4 as uuid } from './utils.js'

// Slots
const getAvatarSlot = () => {
  const img = document.createElement('img')
  img.slot = 'avatar'
  return img
}

// Templates
export const getTemplate = () => {
  template = document.createElement('template')
  template.id = `${uuid()}`
  const avatarSlot = getAvatarSlot()
  template
  return template
}
