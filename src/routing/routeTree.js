import { createRootRoute } from "@tanstack/react-router"
import { homePageRoute } from "./homepage"
import { authRoute } from "./auth.route"
import { dasboardRoute } from "./dashboard"
import RootLayout from "../RootLayout"
import { learnRoute } from "./learn"
import { Outlet } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
    component: RootLayout,
   })

export const routeTree = rootRoute.addChildren([
    homePageRoute, 
    authRoute, 
    dasboardRoute,
    learnRoute,
])
