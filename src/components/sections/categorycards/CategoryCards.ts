import { SliderType } from 'src/components/data/Data.ts';
import './index.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default function categorycards(DOM: HTMLDivElement, posts: SliderType) {
    let swiper: Swiper;
    
    const renderCards = (data: SliderType) => {
        return data.map((item, id) => `
            <div key='${id}' class='swiper-slide card'>
                <div class='food-img'>
                    <img src='${item.image}' alt='food image' />
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
    };

    const updateSwiperSlides = (data: SliderType) => {
        const swiperWrapper = DOM.querySelector('.swiper-wrapper') as HTMLElement;
        swiperWrapper.innerHTML = renderCards(data);
        swiper.update(); 
    };

    const filterData = (category: string) => {
        const filteredData = category === 'all' ? posts : posts.filter(item => item.category.toLowerCase() === category);
        updateSwiperSlides(filteredData);
    };

    DOM.innerHTML = (`
        <h4>Categories</h4>
        <div class='options'>
            <button class='selected all'>All</button>
            <button>Desserts</button>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
        </div>
        <div class='swiper-container'>
            <div class="swiper-wrapper">
                ${renderCards(posts)}
            </div>
            <div class='swiper-button-prev prev'></div>
            <div class='swiper-button-next next'></div>
        </div>
    `);

    const swiperContainer = DOM.querySelector('.swiper-container') as HTMLElement;
    swiper = new Swiper(swiperContainer, {
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

    const selectBtns = document.querySelectorAll('.options button');

    selectBtns.forEach(button => {
        button.addEventListener('click', () => {
            selectBtns.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            const category = button.textContent!.toLowerCase();
            filterData(category);
        });
    });

    // Move left or right functionality
    const moveLeft = () => swiper.slidePrev();
    const moveRight = () => swiper.slideNext();

    const prevButton = DOM.querySelector('.swiper-button-prev') as HTMLElement;
    const nextButton = DOM.querySelector('.swiper-button-next') as HTMLElement;

    prevButton.addEventListener('click', moveLeft);
    nextButton.addEventListener('click', moveRight);

    swiper.update();
}
