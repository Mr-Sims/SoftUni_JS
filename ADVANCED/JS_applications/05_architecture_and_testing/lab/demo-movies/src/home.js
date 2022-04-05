import { showSection } from "./dom.js";

const homeSection = document.getElementById('homeSection')
homeSection.remove()

const aboutSection = document.getElementById('aboutSection')
aboutSection.remove();

export function showHomePage(ctx) {
    showSection(homeSection)
    // ctx.showSection(homeSection)
}

export function showAboutPage(ctx) {
    // showSection(aboutSection)
    ctx.showSection(aboutSection)
}