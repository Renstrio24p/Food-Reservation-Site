import CategorySet from 'src/components/sections/categoryset/Categoryset.ts'
import { scriptElement } from '../../utils/sanitizer/domSanitizer.ts'
import RightSidebar from 'src/components/sections/righbar/Rightbar.ts'
import './index.css'
import { SliderType } from 'src/redux/redux.state.ts'

export default function Category(DOM: HTMLDivElement, posts: SliderType) {

  DOM.innerHTML = (`
    <div class='category-page'>
       <div id='category-set' class='category-set'></div>
       <aside id='right-sidebar' class='right-sidebar'></aside>
    </div>
  `)

    const categorySet = document.getElementById('category-set') as HTMLDivElement
    categorySet.appendChild(scriptElement)
    CategorySet(categorySet, posts)

    const rightSidebar = document.getElementById('right-sidebar') as HTMLDivElement
    rightSidebar.appendChild(scriptElement)
    RightSidebar(rightSidebar)

    return DOM
}