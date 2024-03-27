import Menus from 'src/components/sections/menu/Menus.ts';
import { scriptElement } from '../../utils/sanitizer/domSanitizer.ts';
import './index.css'
import { SliderType } from 'src/redux/redux.state.ts';

export default function Menu(DOM: HTMLDivElement,posts: SliderType) {

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
            <img src='http://localhost:4000/api/upload/image/5c1fdade41d28d877acdf90734437e82.png' alt='sisig image' />
        </div>
    </div>

    <div id='menu-section'></div>
  `);

    const menuSection = DOM.querySelector('#menu-section') as HTMLDivElement
    menuSection.appendChild(scriptElement)
    Menus(menuSection,posts)

  return DOM
}