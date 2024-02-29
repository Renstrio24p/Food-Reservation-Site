import AboutSection from '../../components/AboutSection/AboutSection';
import Categories from '../../components/Categories/Categories';
import { sliderData } from '../../components/data/Data'
import { scriptElement } from '../../utils/sanitizer/domSanitizer';
import './Home.css'

export default function Home(DOM: HTMLDivElement) {

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
                <div class='cards-container'>
                    ${sliderData.map((item, id) =>
        `
                                <div key='${id}' class='card'>
                                    <div class='food-img'>
                                        <img src='/${item.image}.png' alt='food image' />
                                    </div>
                                    <div class='info'>
                                        <h3>${item.title}</h3>
                                        <p>${item.description}</p>
                                        <p>₱${item.price}</p>
                                        <i class='bx bx-x'></i>
                                    </div>
                                </div>
                            `
                        ).join('')
                    }
                </div>
            </div>
            <i class='bx bx-chevron-right' id='slide-right'></i>
        </div>
        <div id='categories' class='categories'></div>
        <div id='about-section' class='about-section'></div>
    `);

    const slideLeft = document.getElementById('slide-left') as HTMLElement;
    const slideRight = document.getElementById('slide-right') as HTMLElement;
    const sliderSlides = document.querySelector('.slider-slides') as HTMLElement;

    if (slideLeft && slideRight && sliderSlides) {
        slideLeft.onclick = () => {
            sliderSlides.scrollLeft -= 100;
            console.log('clicked left')
        };

        slideRight.onclick = () => {
            sliderSlides.scrollLeft += 100;
            console.log('clicked right')
        };
    }

    // Mount Categories Component

    const categories = document.getElementById('categories') as HTMLDivElement
    categories.appendChild(scriptElement) // sanitized DOM parameter to avoid XSS
    Categories(categories)

    // Mount About Component

    const aboutSection = document.getElementById('about-section') as HTMLDivElement
    aboutSection.appendChild(scriptElement) // sanitized DOM parameter to avoid XSS
    AboutSection(aboutSection)

    return DOM;
}
