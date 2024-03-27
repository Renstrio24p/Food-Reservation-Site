import Footer from "./components/sections/footer/Footer.ts"
import Navbar from "./components/sections/navbar/Navbar.ts"
import { fetchSliderData, fetchUserData } from "./redux/redux.state.ts"
import store from "./redux/redux.state.ts"
import { Routes } from "./utils/router/router.ts"
import { scriptElement } from "./utils/sanitizer/domSanitizer.ts"

export default function Start(DOM: HTMLDivElement) {

    // Function to fetch data
    const fetchData = async () => {
        try {
            await store.dispatch(fetchSliderData());
            await store.dispatch(fetchUserData());
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Subscribe to Redux store changes
    const handleStoreChange = () => {
        const state = store.getState();
        const sliderData = state.slider.sliderData;
        const userData = state.user.userData;

        const userSliderData = sliderData;
        const [users] = userData;
        const allusers = userData;

        const username = users ? users.name : 'Default Username';
        const userRole = users ? users.role : 'Default Role';
        const profile = users ? users.image : 'Default Profile Image';

        const posts = userSliderData;

        const user = { username, userRole, profile };

        DOM.innerHTML = (`
            <div>
                <nav id='navbar'></nav>
                <div id='router'></div>
                <footer id='footer'></footer>
            </div>
        `);

        const navbar = document.getElementById('navbar') as HTMLDivElement;
        navbar.appendChild(scriptElement);
        Navbar(navbar);

        const routes = document.getElementById('router') as HTMLDivElement;
        routes.appendChild(scriptElement);
        Routes(routes, user, posts, allusers);

        const footer = document.getElementById('footer') as HTMLDivElement;
        footer.appendChild(scriptElement);
        Footer(footer);
    };

    // Initial fetch
    fetchData();

    // Subscribe to store changes
    const unsubscribe = store.subscribe(handleStoreChange);

    // Unsubscribe from store changes when component unmounts
    return () => {
        unsubscribe();
    };
}
