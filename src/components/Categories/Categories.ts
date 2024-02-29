import { sliderData } from '../data/Data';
import './Categories.css';

export default function Categories(DOM: HTMLDivElement) {
    let filteredData = sliderData;

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

    const filterData = (category: string) => {
        filteredData = sliderData.filter(item => item.category === category);
        renderCards(filteredData);
    };

    const renderCards = (data: typeof sliderData) => {
        const cardsContainer = DOM.querySelector('.cards-container') as HTMLDivElement;
        cardsContainer.innerHTML = data.map((item, id) => `
            <div key='${id}' class='card'>
                <div class='food-img'>
                    <img src='/${item.image}' alt='food image' />
                    <p>${item.category}</p>
                </div>
                <div class='info'>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p>₱${item.price}</p>
                    <i class='bx bx-x'></i>
                </div>
            </div>
        `).join('');
        cardsContainer.style.scrollBehavior = 'smooth'; 
    };

    renderCards(sliderData);

    const slideLeft = document.getElementById('slide-left') as HTMLElement;
    const slideRight = document.getElementById('slide-right') as HTMLElement;
    const selectBtn = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;

    selectBtn.forEach(button => {
        button.addEventListener('click', () => {
            selectBtn.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            const category = button.textContent!.toLowerCase();
            if (category === 'all') {
                renderCards(sliderData);
            } else {
                filterData(category);
            }
        });
    });

    slideLeft.onclick = () => {
        const cardsContainer = DOM.querySelector('.cards-container') as HTMLElement;
        cardsContainer.scrollLeft -= 100;
    };

    slideRight.onclick = () => {
        const cardsContainer = DOM.querySelector('.cards-container') as HTMLElement;
        cardsContainer.scrollLeft += 100;
    };
}
