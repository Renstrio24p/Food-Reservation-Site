import store, { fetchSliderData, SliderType } from 'src/redux/redux.state.ts';
import './index.css';
import { tsEffect } from 'src/utils/hooks/tsEffect.ts';

export default function Menus(DOM: HTMLDivElement) {

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

        renderMenus(sliderData);
    });

    const generateCards = (data: SliderType) => {
        return data.map((item, id) => `
            <div key=${id} class='menu-card'>
                <div class='image-content'>
                    <img src='/${item.image}' alt='dish image' />
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
    }

    const renderMenus = (sliderData: SliderType) => {
        DOM.innerHTML = (`
            <div class='dish-menu'>
                <h2>Dish Menu</h2>
                <p class='menu-title'>Breakfast Dish</p>
                <p class='desc'>Morning Dish Favorite</p>
                <div class='breakfast-content'>
                    ${generateCards(sliderData.filter(item => item.category === 'breakfast'))}
                </div>
            </div>
            <div class='dish-menu'>
                <p class='menu-title'>Lunch Dish</p>
                <p class='desc'>Lunch Dish Favorites</p>
                <div class='breakfast-content'>
                    ${generateCards(sliderData.filter(item => item.category === 'lunch'))}
                </div>
            </div>
            <div class='dish-menu'>
                <p class='menu-title'>Dinner Dish</p>
                <p class='desc'>Dinner Dish Favorites</p>
                <div class='breakfast-content'>
                    ${generateCards(sliderData.filter(item => item.category === 'dinner'))}
                </div>
            </div>
            <div class='dish-menu'>
                <p class='menu-title'>Desserts</p>
                <p class='desc'>Dessert Favorites</p>
                <div class='breakfast-content'>
                    ${generateCards(sliderData.filter(item => item.category === 'desserts'))}
                </div>
            </div>
        `);
    };

    return DOM;
}
