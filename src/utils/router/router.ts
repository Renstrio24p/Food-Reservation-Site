
import NotFound from "../../pages/404/NotFound";
import Home from "../../pages/Home/Home";
import Menu from "../../pages/Menu/Menu";
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
            path: '*',
            element: ()=> NotFound(DOM)
        }
    ])
    router.navigate("")
}