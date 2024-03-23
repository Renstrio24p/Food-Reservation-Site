import './index.css'


export function isAuthenticated(authComponent: (DOM: HTMLDivElement) => void, DOM: HTMLDivElement): void {
    DOM.innerHTML = (`
        <div class='auth'>
            <h1>Verifying<span id="dots"></span></h1>
        </div>
    `);

    const dotsElement = document.getElementById('dots');

    if (dotsElement) {
        let count = 1;
        setInterval(() => {
            dotsElement.textContent = '.'.repeat(count);
            count = (count % 3) + 1;
        }, 500); 
    }

    setTimeout(() => {
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            authComponent(DOM);
        } else {
            window.location.href = '/login';
        }
    }, 3000);
}
