import categorycards from 'src/components/sections/categorycards/CategoryCards.ts';
import { scriptElement } from '../../utils/sanitizer/domSanitizer.ts';
import Aboutus from 'src/components/sections/aboutus/Aboutus.ts';
import { SliderType } from 'src/redux/redux.state.ts';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './index.css';

export default function Home(DOM: HTMLDivElement, posts: SliderType) {

    const renderSlider = (sliderData: SliderType) => {
        return sliderData.map((item, id) => `
            <div key=${id} class='swiper-slide'>
                <div class='card'>
                    <div class='food-img'>
                        <img src='${item.image}' alt='food image' />
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
    }

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
        <div class='home-content'>
            <div class='swiper-container'>
                <div class="swiper-wrapper">
                    ${renderSlider(posts)}
                </div>
                <div class="swiper-navigation">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div id='categories' class='categories'></div>
            <div id='about-section' class='about-section'></div>
        </div>
    `);

    const categories = DOM.querySelector('#categories') as HTMLDivElement;
    if (categories) {
        categories.appendChild(scriptElement);
        categorycards(categories, posts);
    }

    const aboutSection = DOM.querySelector('#about-section') as HTMLDivElement;
    if (aboutSection) {
        aboutSection.appendChild(scriptElement);
        Aboutus(aboutSection);
    }

    // Initialize Swiper after DOM manipulation
    const swiperContainer = DOM.querySelector('.swiper-container') as HTMLElement;
    if (swiperContainer) {
        const swiper = new Swiper(swiperContainer, {
            initialSlide: 0,
            centeredSlides: true,
            loop: true, 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 4,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
        });
        
        // Event listeners for navigation buttons
        const prevButton = DOM.querySelector('.swiper-button-prev') as HTMLElement;
        const nextButton = DOM.querySelector('.swiper-button-next') as HTMLElement;

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => swiper.slidePrev());
            nextButton.addEventListener('click', () => swiper.slideNext());
        }
        swiper.update();
    }

    return DOM;
}
