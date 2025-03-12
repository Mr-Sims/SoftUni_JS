import { html, classMap } from '../lib.js';

export const inputField = (label, type, name, value = '', hasError) => {
        if (type == 'textarea') {
                return html`
                <label for=${name}><span>${label}</span><textarea class=${classMap({ error: hasError })} .value=${value} name=${name}></textarea></label>
        `
        } else {
                return html`
                <label for=${name}><span>${label}</span><input class=${classMap({ error: hasError })} type=${type} name=${name} .value=${value}></label>
        `
        }
}
