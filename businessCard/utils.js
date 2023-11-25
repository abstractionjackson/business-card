export const formatPhoneNumber = (phoneNumber) => {
  // Remove any spaces from the phone number
  phoneNumber = phoneNumber.toString().replace(/\s/g, '')

  // Check if the phone number is 10 digits long
  if (phoneNumber.length !== 10) {
    return phoneNumber
  }

  // Format the phone number as (123) 456-7890
  return (
    '(' +
    phoneNumber.substring(0, 3) +
    ') ' +
    phoneNumber.substring(3, 6) +
    '-' +
    phoneNumber.substring(6)
  )
}

const excludedProps = new Set(['length', 'name', 'prototype'])
export const getStaticProperties = (Class) =>
  Object.getOwnPropertyNames(Class).filter((prop) => {
    return typeof Class[prop] !== 'function' && !excludedProps.has(prop)
  })

export const uuid4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
