export const dateConverter = (data) => {
    return new Date(data).toDateString()
}

export const fullNameHelper = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

export const printAddress = (data) => {
    return `${data.country}, ${data.city}, ${data.street}, ${data.streetNumber}`
}