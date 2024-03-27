import { SliderType } from 'src/redux/redux.state.ts';
import './index.css';

export default function Menus(DOM: HTMLDivElement, posts: SliderType) {

    const generateCards = (data: SliderType) => {
        console.log('this data :',data);
        return data.map((item) => `
            <div key=${item._id} class='menu-card'>
                <div class='image-content'>
                    <img src='${item.image}' alt='dish image' />
                    <p class='category'>${item.category}</p>
                </div>
                <div class='rating'>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                </div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class='menu-action'>
                    <button>Add to Cart</button>
                    <p>₱ ${item.price}</p>
                </div>
            </div>
        `).join('');
    };

    const renderMenus = () => {
        DOM.innerHTML = (`
            <div class='dish-menu'>
                <h2>Dish Menu</h2>
                <p class='menu-title'>Breakfast Dish</p>
                <p class='desc'>Morning Dish Favorite</p>
                <div class='breakfast-content'>
                    ${generateCards(posts.filter((item) => item.category === 'breakfast'))}
                </div>
            </div>
            <div class='dish-menu'>
                <p class='menu-title'>Lunch Dish</p>
                <p class='desc'>Lunch Dish Favorites</p>
                <div class='breakfast-content'>
                    ${generateCards(posts.filter(item => item.category === 'lunch'))}
                </div>
            </div>
            <div class='dish-menu'>
                <p class='menu-title'>Dinner Dish</p>
                <p class='desc'>Dinner Dish Favorites</p>
                <div class='breakfast-content'>
                    ${generateCards(posts.filter(item => item.category === 'dinner'))}
                </div>
            </div>
            <div class='dish-menu'>
                <p class='menu-title'>Desserts</p>
                <p class='desc'>Dessert Favorites</p>
                <div class='breakfast-content'>
                    ${generateCards(posts.filter(item => item.category === 'desserts'))}
                </div>
            </div>
        `);
    };

    renderMenus(); // Call the renderMenus function to render the menus initially

    return renderMenus; // Return the renderMenus function so it can be used externally if needed
}
