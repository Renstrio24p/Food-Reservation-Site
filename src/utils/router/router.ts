
import NotFound from "../../pages/404/NotFound";
import About from "../../pages/About/About";
import Category from "../../pages/Category/Category";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Menu from "../../pages/Menu/Menu";
import { isAuthenticated } from "../../pages/auth/Authentication/isAuthenticated";
import Cart from "../../pages/auth/pages/cart/Cart";
import Login from "../../pages/auth/pages/login/Login";
import Settings from "../../pages/auth/pages/settings/Settings";
import { TSRouter } from "./class/router.class";

export const Routes = (DOM: HTMLDivElement) => {
    const router = new TSRouter([
        {
            path: '/',
            element: ()=> Home(DOM!),
        },
        {
            path: '/menu',
            element: ()=> Menu(DOM),
        },
        {
            path: '/category',
            element: ()=> Category(DOM),
        },
        {
            path: '/aboutus',
            element: ()=> About(DOM),
        },
        {
            path: '/contactus',
            element: ()=> Contact(DOM),
        },
        {
            path: '/login',
            element: ()=> Login(DOM),
        },
        {
            path: '/cart',
            element: ()=> isAuthenticated(() => Cart(DOM), DOM),
        },
        {
            path: '/settings',
            element: ()=> isAuthenticated(() => Settings(DOM), DOM),
        },
        {
            path: '*',
            element: ()=> NotFound(DOM)
        }
    ])
    router.navigate("")
}