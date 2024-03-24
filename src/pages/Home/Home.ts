import categorycards from 'src/components/sections/categorycards/CategoryCards.ts';
import { scriptElement } from '../../utils/sanitizer/domSanitizer.ts';
import Aboutus from 'src/components/sections/aboutus/Aboutus.ts';
import { fetchSliderData, SliderType } from 'src/redux/redux.state.ts';
import store from 'src/redux/redux.state.ts';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
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

    const renderSlider = (sliderData: SliderType) => {
        const slidesHTML = sliderData.map((item, id) => `
            <div key=${id} class='swiper-slide'>
                <div class='card'>
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
            </div>
        `).join('');

        const swiperWrapper = DOM.querySelector('.swiper-wrapper');
        if (swiperWrapper) {
            swiperWrapper.innerHTML = slidesHTML;
        } else {
            console.error('Swiper wrapper not found.');
        }

        // Adjust slidesPerView based on the number of slides
        const slidesPerView = Math.min(3, sliderData.length); // Maximum of 3 slides per view
        initSwiper(slidesPerView);
    };

    const initSwiper = (slidesPerView: number) => {
        const swiperContainer = DOM.querySelector('.swiper-container');
        if (!swiperContainer) {
            console.error('Swiper container not found.');
            return;
        }

        new Swiper(swiperContainer as HTMLElement, {
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: slidesPerView,
            spaceBetween: 20,
        });
    };

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
        <div class='swiper-container'>
            <div class="swiper-wrapper"></div>
            <div class="swiper-navigation">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <div id='categories' class='categories'></div>
        <div id='about-section' class='about-section'></div>
    `);

    const categories = DOM.querySelector('#categories') as HTMLDivElement;
    if (categories) {
        categories.appendChild(scriptElement);
        categorycards(categories);
    }

    const aboutSection = DOM.querySelector('#about-section') as HTMLDivElement;
    if (aboutSection) {
        aboutSection.appendChild(scriptElement);
        Aboutus(aboutSection);
    }

    return DOM;
}
