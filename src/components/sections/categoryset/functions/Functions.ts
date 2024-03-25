import { SliderType } from "src/redux/redux.state.ts";
import { toCapitalized } from "./tools/toUpperCase.ts";

const generateCards = (data: SliderType) => {
    return data.map((item, id) => {
        return (`
            <div key=${id} class='collection-card' id=${id}>
                <div class='collection-image'>
                    <img src='${item.image}' alt='collection' />
                </div>
                <div class='card-details'>
                    <div class='details'>
                        <h3>${item.title}</h3>
                        <p>Flavors: ${item.flavors ? item.flavors.join(', ') : ''}</p>
                    </div>
                    <input type='button' id='button-${id}' class='add-btn' value='Add To Cart' data-id='${item._id}'>
                </div>
            </div>
        `);
    }).join('');
};

export const renderCategory = (categoryName: string, description: string, data: SliderType) => {
    return (`
        <div class='hero-category-section ${categoryName}'>
            <div>
                <h1>${toCapitalized(categoryName)}</h1>
                <p>${description}</p>
            </div>
        </div>
        <div class='category-section ${categoryName}'>
            <h2>${toCapitalized(categoryName)}</h2>
            <div class='category-menu'>
                ${generateCards(data)}
            </div>
        </div>
    `);
};
