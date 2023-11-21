export function formatPhoneNumber(phoneNumber) {
  // Remove any spaces from the phone number
  phoneNumber = phoneNumber.replace(/\s/g, '')

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
