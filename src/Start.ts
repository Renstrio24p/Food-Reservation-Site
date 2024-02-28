import Navbar from "./components/Navbar/Navbar"
import { Routes } from "./utils/router/router"
import { scriptElement } from "./utils/sanitizer/domSanitizer"

export default function Start(DOM: HTMLDivElement) {

    DOM.innerHTML = (`
        <div>
            <nav id='navbar'></nav>
            <div id='router'></div>
        </div>
    `)

    const navbar = document.getElementById('navbar') as HTMLDivElement
    navbar.appendChild(scriptElement)
    Navbar(navbar)

    const routes = document.getElementById('router') as HTMLDivElement
    routes.appendChild(scriptElement)
    Routes(routes)

}