import { sliderData, SliderType } from 'src/components/data/Data.ts';
import './index.css';

export default function CategorySet(DOM: HTMLDivElement) {
    const filterAppetizers = sliderData.filter(item => item.collection === 'appetizer');
    const filterSoups = sliderData.filter(item => item.collection === 'soup');
    const filterPizza = sliderData.filter(item => item.collection === 'pizza');
    const filterDesserts = sliderData.filter(item => item.collection === 'desserts');

    const generateCards = (data: SliderType) => {
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
    }

    DOM.innerHTML = (`
        <div>
            <div class='nav-category'>
                <button>Appetizers</button>
                <button>Soups</button>
                <button>Pizza</button>
                <button>Desserts</button>
                <button>Drinks</button>
            </div>
            <div class='hero-category-section'>
                <div>
                    <h1>Categories</h1>
                    <p>Delicious Food to choose.</p>
                </div>
            </div>
            <div class='category-section'>
                <h2>Appetizers</h2>
                <div class='category-menu'>
                    ${filterAppetizers.length > 0 ? generateCards(filterAppetizers) : 'No appetizers available'}
                </div>
            </div>
            <div class='category-section'>
                <h2>Soup</h2>
                <div class='category-menu'>
                    ${filterSoups.length > 0 ? generateCards(filterSoups) : 'No Soups available'}
                </div>
            </div>
            <div class='hero-category-section pizza'>
                <div>
                    <h1>Pizza</h1>
                    <p>Delicious Pizza Collection</p>
                </div>
            </div>
            <div class='category-section'>
                <h2>Pizza</h2>
                <div class='category-menu'>
                    ${filterPizza.length > 0 ? generateCards(filterPizza) : 'No Pizza available'}
                </div>
            </div>
            <div class='hero-category-section desserts'>
                <div>
                    <h1>Desserts</h1>
                    <p>Delicious Desserts</p>
                </div>
            </div>
            <div class='category-section'>
                <h2>Desserts</h2>
                <div class='category-menu'>
                    ${filterDesserts.length > 0 ? generateCards(filterDesserts) : 'No Desserts available'}
                </div>
            </div>
        </div>
    `);
}
