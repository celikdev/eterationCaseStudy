import Home from "./Home";
import Basket from "./Basket";
import Favorite from "./Favorite";
import Account from "./Account";
import { BasketIcon, HomeIcon, StarIcon, UserIcon } from "../assets/icons/Icons";
import { HomeStack } from "./Stack";

export const Routes = [
    {
        name: "HomeStack",
        component: HomeStack,
        icon: HomeIcon
    },
    {
        name: "Basket",
        component: Basket,
        icon: BasketIcon
    },
    {
        name: "Favorite",
        component: Favorite,
        icon: StarIcon
    },
    {
        name: "Account",
        component: Account,
        icon: UserIcon
    },
]