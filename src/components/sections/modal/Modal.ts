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
            <div class='modal-info'>
                <h1>${selectedItem.title}</h1>
                <p>Description: ${selectedItem.description}</p>
                <p>Price: ${selectedItem.price}</p>
            </div>
        </div>
    </div>
    `);

    const modalStorage = DOM.querySelector('.modal-storage') as HTMLDivElement;
    // Close modal
    const close = DOM.querySelector('.close') as HTMLSpanElement;
    close.addEventListener('click', () => {
        modalStorage.style.display = 'none';
        DOM.remove();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Enter') {
            modalStorage.style.display = 'none';
            DOM.remove();
        }
    })


    modalStorage.addEventListener('click', (e) => {
        modalStorage.style.display = 'none';
        DOM.remove();
    })

}