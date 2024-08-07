import { createBrowserRouter } from "react-router-dom";
import { Home } from "./app/Home";
import { About } from "./app/About";
import { Projects } from "./app/Projects";
import RootLayout from "./layout/RootLayout";
import NotFound from "./components/standard/NotFound";
import { Blogs } from "./app/Blogs";
import SingleBlog from "./app/Blogs/components/SingleBlog";
import Craft from "./app/Crafts/Craft";

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
    },
    {
        path: "/blogs",
        element: <Blogs />
    },
    {
        path: "/blogs/:slug",
        element: <SingleBlog />
    },
    
    {
        path: "/crafts",
        element: <Craft />
    },
    {
        path: "*",
        element: <NotFound />
    }
]}
    ]);

export default router;