import type { ComponentType } from "react";
import HomePage from "./pages/Home";

export interface RouteConfig {
    path: string;
    title: string;
    page: ComponentType<any>;
}

export default [
    {
        path: "/",
        title: "Home",
        page: HomePage,
    },
] satisfies RouteConfig[];
