import CategorySet from '../../components/CategorySet/CategorySet'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import { scriptElement } from '../../utils/sanitizer/domSanitizer'
import './Category.css'

export default function Category(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
    <div class='category-page'>
       <div id='category-set' class='category-set'></div>
       <aside id='right-sidebar' class='right-sidebar'></aside>
    </div>
  `)

    const categorySet = document.getElementById('category-set') as HTMLDivElement
    categorySet.appendChild(scriptElement)
    CategorySet(categorySet)

    const rightSidebar = document.getElementById('right-sidebar') as HTMLDivElement
    rightSidebar.appendChild(scriptElement)
    RightSidebar(rightSidebar)

    return DOM
}