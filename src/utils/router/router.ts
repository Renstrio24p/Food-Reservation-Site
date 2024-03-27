
import Home from "src/pages/Home/Home.ts";
import Login from "../../pages/auth/pages/login/Login.ts";
import Settings from "../../pages/auth/pages/settings/Settings.ts";
import { TSRouter } from "./class/router.class.ts";
import Menu from "src/pages/Menu/Menu.ts";
import Category from "src/pages/Category/Category.ts";
import About from "src/pages/About/About.ts";
import Contact from "src/pages/Contact/Contact.ts";
import { isAuthenticated } from "src/pages/auth/Authentication/isAuthenticated.ts";
import Cart from "src/pages/auth/pages/cart/Cart.ts";
import NotFound from "src/pages/404/NotFound.ts";
import { SliderType, UserType } from "src/redux/redux.state.ts";
import { User } from "src/components/types/User.ts";

export const Routes = (DOM: HTMLDivElement,user: User,posts: SliderType,allusers: UserType) => {
    const router = new TSRouter([
        {
            path: '/',
            element: ()=> Home(DOM!,posts),
        },
        {
            path: '/menu',
            element: ()=> Menu(DOM,posts),
        },
        {
            path: '/category',
            element: ()=> Category(DOM,posts),
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
            element: ()=> NotFound(DOM,user)
        }
    ])
    router.navigate("")
}