import { showCatalog } from './catalog.js'
import { showCreate } from './create.js'
import { showUpdate } from './update.js'

import { render } from './utility.js'

// main module
// init modules with dependecies
// - rendering
// - communication between modules

const root = document.body

const ctx = {
    // render: (template) => render(template, root)
    update
}

update()

function update() {
    render([
        showCatalog(ctx),
        showCreate(ctx),
        showUpdate(ctx)
    ], root)
}

