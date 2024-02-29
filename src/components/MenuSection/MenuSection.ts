import { SliderType, sliderData } from '../data/Data';
import './MenuSection.css'

export default function MenuSection(DOM: HTMLDivElement) {
    

    const breakfastData = sliderData.filter(item => item.category === 'breakfast')
    const lunchData = sliderData.filter(item => item.category === 'lunch')
    const dinnerData = sliderData.filter(item => item.category === 'dinner')
    const dessertData = sliderData.filter(item => item.category === 'desserts')
  
    function generateCards(data: SliderType) {
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

    DOM.innerHTML = (`
    <div class='dish-menu'>
       <h2>Dish Menu</h2>
       <p class='menu-title'>BreakFast Dish</p>
       <p class='desc'>Morning Dish Favorite</p>
       <div class='breakfast-content'>
           ${generateCards(breakfastData)}
       </div>
    </div>
    <div class='dish-menu'>
       <p class='menu-title'>Lunch Dish</p>
       <p class='desc'>Lunch Dish Favorites</p>
       <div class='breakfast-content'>
           ${generateCards(lunchData)}
       </div>
    </div>
    <div class='dish-menu'>
       <p class='menu-title'>Dinner Dish</p>
       <p class='desc'>Dinner Dish Favorites</p>
       <div class='breakfast-content'>
           ${generateCards(dinnerData)}
       </div>
    </div>
    <div class='dish-menu'>
       <p class='menu-title'>Desserts</p>
       <p class='desc'>Dessert Favorites</p>
       <div class='breakfast-content'>
           ${generateCards(dessertData)}
       </div>
    </div>
  `);



  return DOM
}