import store, { fetchSliderData } from '../../../redux/redux.state.ts';
import './index.css';

export default function CategorySet(DOM: HTMLDivElement) {
    const dispatch = store.dispatch;

    const fetchData = async () => {
        try {
            await dispatch(fetchSliderData());
        } catch (error) {
            console.error('Error fetching slider data:', error);
        }
    };

    fetchData();

    store.subscribe(() => {
        const state = store.getState();
        const sliderData = state.slider.sliderData;

        if (!Array.isArray(sliderData)) {
            console.error('Slider data is not an array:', sliderData);
            return;
        }

        const filterByCategory = (category: string) => {
            return sliderData.filter((item) => item.collection === category);
        };

        const generateCards = (data: any[]) => {
            return data.map((item, id) => {
                return (`
                    <div key=${id} class='collection-card'>
                        <div class='collection-image'>
                            <img src='${item.image}' alt='collection' />
                        </div>
                        <div class='card-details'>
                            <div class='details'>
                                <h3>${item.title}</h3>
                                <p>Flavors: ${item.flavors ? item.flavors.join(', ') : ''}</p>
                            </div>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                `);
            }).join('');
        };

        DOM.innerHTML = (`
            <div>
                <div class='nav-category'>
                    <button id='appetizers' class='active'>Appetizers</button>
                    <button id='soups'>Soups</button>
                    <button id='pizza'>Pizza</button>
                    <button id='desserts'>Desserts</button>
                    <button id='drinks'>Drinks</button>
                </div>
                <div class='hero-category-section appetizers'>
                    <div>
                        <h1>Categories</h1>
                        <p>Delicious Food to choose.</p>
                    </div>
                </div>
                <div class='category-section appetizers'>
                    <h2>Appetizers</h2>
                    <div class='category-menu'>
                        ${generateCards(filterByCategory('appetizer'))}
                    </div>
                </div>
                <div class='hero-category-section soups'>
                    <div>
                        <h1>Soups</h1>
                        <p>Delicious Soothing Soup Collection</p>
                    </div>
                </div>
                <div class='category-section soups'>
                    <h2>Soups</h2>
                    <div class='category-menu'>
                        ${generateCards(filterByCategory('soup'))}
                    </div>
                </div>
                <div class='hero-category-section pizza'>
                    <div>
                        <h1>Pizza</h1>
                        <p>Delicious Pizza Collection</p>
                    </div>
                </div>
                <div class='category-section pizza'>
                    <h2>Pizza</h2>
                    <div class='category-menu'>
                        ${generateCards(filterByCategory('pizza'))}
                    </div>
                </div>
                <div class='hero-category-section desserts'>
                    <div>
                        <h1>Desserts</h1>
                        <p>Delicious Desserts</p>
                    </div>
                </div>
                <div class='category-section desserts'>
                    <h2>Desserts</h2>
                    <div class='category-menu'>
                        ${generateCards(filterByCategory('desserts'))}
                    </div>
                </div>
            </div>
        `);

        DOM.addEventListener('click', (event) => {
            const target = event.target as HTMLButtonElement;
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
