import type { ComponentType } from "react";
import FeedbackPage from "./pages/Feedback";

export interface RouteConfig {
    path: string;
    title: string;
    page: ComponentType<any>;
}

export default [
    {
        path: "/",
        title: "Feedback",
        page: FeedbackPage,
    },
] satisfies RouteConfig[];
