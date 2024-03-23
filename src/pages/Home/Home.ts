import categorycards from 'src/components/sections/categorycards/CategoryCards.ts';
import { scriptElement } from '../../utils/sanitizer/domSanitizer.ts';
import Aboutus from 'src/components/sections/aboutus/Aboutus.ts';
import { fetchSliderData } from 'src/redux/redux.state.ts';
import store from 'src/redux/redux.state.ts';
import './index.css';

export default function Home(DOM: HTMLDivElement) {

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

        renderSlider(sliderData);
    });

    DOM.innerHTML = (`
        <div class='hero-section'>
            <h2><span>Pot</span>session <span>in Tuao<span></h2>
            <p>Cagayan</p> 
            <div>
                <button>Order Now</button>
                <button>View More</button>
            </div> 
            <img class='iphone' src='/iphone-app.png' alt='iphone' />      
        </div>
        <h2 class='menu-h2'>Menu</h2>
        <div class='slider'>
            <i class='bx bx-chevron-left' id='slide-left'></i>
            <div class='slider-slides'> 
                <div class='cards-container'></div>
            </div>
            <i class='bx bx-chevron-right' id='slide-right'></i>
        </div>
        <div id='categories' class='categories'></div>
        <div id='about-section' class='about-section'></div>
    `);

    const renderSlider = (sliderData: any[]) => {
        const cardsContainer = document.querySelector('.cards-container') as HTMLElement;

        if (!cardsContainer) {
            console.error('Cards container not found');
            return;
        }

        cardsContainer.innerHTML = sliderData.map((item, id) => `
            <div key='${id}' class='card'>
                <div class='food-img'>
                    <img src='/${item.image}' alt='food image' />
                </div>
                <div class='info'>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p>₱${item.price}</p>
                    <i class='bx bx-x'></i>
                </div>
            </div>
        `).join('');
    };

    const categories = document.getElementById('categories') as HTMLDivElement;
    categories.appendChild(scriptElement);
    categorycards(categories);

    const aboutSection = document.getElementById('about-section') as HTMLDivElement;
    aboutSection.appendChild(scriptElement);
    Aboutus(aboutSection);

    return DOM;
}
