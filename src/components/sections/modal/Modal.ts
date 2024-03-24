import './index.css'

import { SliderType } from "src/redux/redux.state.ts";

export default function Modal(DOM: HTMLDivElement, selectedItem: SliderType['0']) {
    DOM.innerHTML = (`
        <div class='modal-storage'>
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class='modal-image'>
                    <img src='${selectedItem.image}' alt='food image' />
                </div>
                <div>
                    <h1>${selectedItem.title}</h1>
                    <p>Description: ${selectedItem.description}</p>
                    <p>Price: ${selectedItem.price}</p>
                </div>
            </div>
        </div>
    `);

    // Close modal
    const close = DOM.querySelector('.close') as HTMLSpanElement;
    close.addEventListener('click', () => {
        DOM.style.display = 'none';
        DOM.remove(); 
    });
}