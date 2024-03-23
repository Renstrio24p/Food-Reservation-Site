import Menus from 'src/components/sections/menu/Menus.ts';
import { scriptElement } from '../../utils/sanitizer/domSanitizer.ts';
import './index.css'

export default function Menu(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
    <div class='menu-hero-section'>
        <div class='menu-left'>
            <p class='recommend'>Our Favorite Dish</p>
            <h1>Pinoy Pork Sisig</h1>
            <p>One of the most popular traditional dish in the philippines</p>
            <p class='available'><i class='bx bx-knife' ></i> Also Available <i class='bx bx-fork'></i></p>
            <div class='sisig-list'>
                <p>Chicken</p>
                <p>Beef</p>
            </div>
        </div>
        <div class='menu-right'>
            <img src='/sisig.png' alt='sisig image' />
        </div>
    </div>

    <div id='menu-section'></div>
  `);

    const menuSection = DOM.querySelector('#menu-section') as HTMLDivElement
    menuSection.appendChild(scriptElement)
    Menus(menuSection)

  return DOM
}