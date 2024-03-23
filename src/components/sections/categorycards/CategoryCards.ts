import { SliderType } from 'src/components/data/Data.ts';
import store, { fetchSliderData } from '../../../redux/redux.state.ts';
import './index.css';

export default function categorycards(DOM: HTMLDivElement) {
   
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

        renderCards(sliderData);
    });

    DOM.innerHTML = (`
        <h4>Categories</h4>
        <div class='options'>
            <button class='selected all'>All</button>
            <button>Desserts</button>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
        </div>
        <div class='slider categories'>
            <i class='bx bx-chevron-left' id='slide-left'></i>
            <div class='slider-slides'> 
                <div class='cards-container'></div>
            </div>
            <i class='bx bx-chevron-right' id='slide-right'></i>
        </div>
    `);

    const renderCards = (data: SliderType) => {
        const cardsContainer = DOM.querySelector('.cards-container') as HTMLDivElement;
        cardsContainer.innerHTML = data.map((item, id) => `
            <div key='${id}' class='card'>
                <div class='food-img'>
                    <img src='/${item.image}' alt='food image' />
                    <p class='item-category'>${item.category}</p>
                </div>
                <div class='info'>
                    <h3 class='title-item'>${item.title}</h3>
                    <p>${item.description}</p>
                    <p>₱${item.price}</p>
                    <i class='bx bx-x'></i>
                </div>
            </div>
        `).join('');
        cardsContainer.style.scrollBehavior = 'smooth'; 
    };

    const filterData = (category: string, sliderData: SliderType) => {
        const filteredData = sliderData.filter(item => item.category === category);
        renderCards(filteredData);
    };

    const selectBtn = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;

    selectBtn.forEach(button => {
        button.addEventListener('click', () => {
            selectBtn.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            const category = button.textContent!.toLowerCase();
            const state = store.getState();
            const sliderData = state.slider.sliderData;
            if (category === 'all') {
                renderCards(sliderData);
            } else {
                filterData(category, sliderData);
            }
        });
    });

    const slideLeft = document.getElementById('slide-left') as HTMLElement;
    const slideRight = document.getElementById('slide-right') as HTMLElement;

    slideLeft.onclick = () => {
        const cardsContainer = DOM.querySelector('.cards-container') as HTMLElement;
        cardsContainer.scrollLeft -= 100;
    };

    slideRight.onclick = () => {
        const cardsContainer = DOM.querySelector('.cards-container') as HTMLElement;
        cardsContainer.scrollLeft += 100;
    };
}
