export const getFormData = formElement => {
    return formElement.elements.reduce((form, { name, value }) => ({ ...form, [name]: value }), {})
}