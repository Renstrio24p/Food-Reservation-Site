import Footer from "./components/sections/footer/Footer.ts"
import Navbar from "./components/sections/navbar/Navbar.ts"
import { Routes } from "./utils/router/router.ts"
import { scriptElement } from "./utils/sanitizer/domSanitizer.ts"

export default function Start(DOM: HTMLDivElement) {

    DOM.innerHTML = (`
        <div>
            <nav id='navbar'></nav>
            <div id='router'></div>
            <footer id='footer'></footer>
        </div>
    `)

    const navbar = document.getElementById('navbar') as HTMLDivElement
    navbar.appendChild(scriptElement)
    Navbar(navbar)

    const routes = document.getElementById('router') as HTMLDivElement
    routes.appendChild(scriptElement)
    Routes(routes)

    const footer = document.getElementById('footer') as HTMLDivElement
    footer.appendChild(scriptElement)
    Footer(footer)


}