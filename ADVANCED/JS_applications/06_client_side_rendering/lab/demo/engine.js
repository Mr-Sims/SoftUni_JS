export function renderTemplate(templateString) {
    const pattern = /{{(.+?)}}/gm;

    return (data) => {
        return templateString.replace(pattern, (match, propName) => {
            return data[propName]
        })
    }
}