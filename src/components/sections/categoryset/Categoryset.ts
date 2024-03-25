import { scriptElement } from 'src/utils/sanitizer/domSanitizer.ts';
import store, { fetchSliderData } from '../../../redux/redux.state.ts';
import Modal from '../modal/Modal.ts';
import './index.css';
import { renderCategory } from './functions/Functions.ts';
import { categories } from './functions/json/selection.ts';
import { tsEffect } from 'src/utils/hooks/tsEffect.ts';

export default function CategorySet(DOM: HTMLDivElement) {


    tsEffect(() => {
        const dispatch = store.dispatch;

        const fetchData = async (type: string) => {
            try {
                await dispatch(fetchSliderData(type));
            } catch (error) {
                console.error('Error fetching slider data:', error);
            }
        };

        fetchData('posts');
    }, [])

    store.subscribe(() => {

        const state = store.getState();
        const sliderData = state.slider.sliderData;

        if (!Array.isArray(sliderData)) {
            console.error('Slider data is not an array:', sliderData);
            return;
        }

        const openModal = (id: string) => {
            const selectedItem = sliderData.find((item) => item._id === id);
            if (selectedItem) {
                const modal = document.createElement('div');
                modal.classList.add('modal');
                document.body.appendChild(modal);
                modal.appendChild(scriptElement);
                Modal(modal, selectedItem);
            }
        };

        const filterByCategory = (category: string) => {
            return sliderData.filter((item) => item.collection === category);
        };

        let categorySelection = ''
        categories.forEach(category => {
            const filteredData = filterByCategory(category.data);
            categorySelection += renderCategory(category.name, category.description, filteredData);
        });

        // Real DOM Elements
        DOM.innerHTML = (`
            <div>
                <div class='nav-category'>
                    <button id='appetizers' class='active'>Appetizers</button>
                    <button id='soups'>Soups</button>
                    <button id='pizza'>Pizza</button>
                    <button id='desserts'>Desserts</button>
                    <button id='drinks'>Drinks</button>
                </div>
                ${categorySelection}
            </div>
        `);

        DOM.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'INPUT' && target.getAttribute('type') === 'button') {
                const id = target.getAttribute('data-id') as string;
                openModal(id);
            } else
                if (target.tagName === 'BUTTON') {
                    const category = target.id;
                    const categorySection = document.querySelector(`.hero-category-section.${category}`) as HTMLElement;
                    if (categorySection) {
                        const rect = categorySection.getBoundingClientRect();
                        const startY = window.pageYOffset;
                        const targetY = startY + rect.top;
                        const duration = 1000;
                        let start: number | null = null;

                        const step = (timestamp: number) => {
                            if (!start) start = timestamp;
                            const elapsed = timestamp - start;
                            const progress = easeInOutQuad(Math.min(elapsed / duration, 1));
                            window.scrollTo(0, startY + progress * (targetY - startY));
                            if (elapsed < duration) {
                                window.requestAnimationFrame(step);
                            }
                        };

                        window.requestAnimationFrame(step);

                        // Remove 'active' class from all buttons
                        const buttons = document.querySelectorAll('.nav-category button');
                        buttons.forEach(button => button.classList.remove('active'));

                        // Add 'active' class to the clicked button
                        target.classList.add('active');
                    }
                }
        });

        const easeInOutQuad = (t: number) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        window.addEventListener('scroll', () => {
            const navCategory = document.querySelector('.nav-category') as HTMLElement;
            if (window.pageYOffset > 50) {
                navCategory.classList.add('fixed');
            } else {
                navCategory.classList.remove('fixed');
            }
        });
    });
}
