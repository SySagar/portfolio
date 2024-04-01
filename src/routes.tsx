import { createBrowserRouter } from "react-router-dom";
import { Home } from "./app/Home";
import { About } from "./app/About";
import { Projects } from "./app/Projects";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
    { 
    element: <RootLayout />,
    children:[

    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about-me",
        element: <About />
    },
    {
        path: "/projects",
        element: <Projects />
    }
]}
    ]);

export default router;