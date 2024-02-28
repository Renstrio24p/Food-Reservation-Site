
import NotFound from "../../pages/404/NotFound";
import Home from "../../pages/Home/Home";
import Main from "../../pages/Main/Main";
import { TSRouter } from "./class/router.class";

export const Routes = (DOM: HTMLDivElement) => {
    const router = new TSRouter([
        {
            path: '/',
            element: ()=> Home(DOM!),
        },
        {
            path: '/main',
            element: ()=> Main(DOM)
        },
        {
            path: '*',
            element: ()=> NotFound(DOM)
        }
    ])
    router.navigate("")
}