export const requiredField = (value) => {
    if (value) return undefined

    return 'Filed is required'
}




export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `max Length is ${maxLength} symbols`

    return undefined
}

