import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Dashboard from "./components/Dashboard/index.tsx";
import Bounceculator from "./components/Bounceculator/index.tsx";

export const ideas: IdeaItem[] = [
    {
        title: "2048",
        nav: "2048",
        clickable: false
    },
    {
        title: "Bounceculator",
        nav: "bounceculator",
        clickable: true
    },
    {
        title: "Cine2Nerdle",
        nav: "cine2nerdle",
        clickable: false
    },
    {
        title: "Github Profile Viewer",
        nav: "profile viewer",
        clickable: false
    },
    {
        title: "Pomodoro Timer",
        nav: "pomodoro timer",
        clickable: false
    },
    {
        title: "Recipe Roulette",
        nav: "recipe-roulette",
        clickable: false
    },
    {
        title: "Word Search",
        nav: "word-search",
        clickable: false
    },
    {
        title: "Wordle",
        nav: "wordle",
        clickable: false
    },
];


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "bounceculator",
                element: <Bounceculator />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
