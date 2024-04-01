import { createBrowserRouter } from "react-router-dom";
import { Home } from "./app/Home";
import { About } from "./app/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about-me",
        element: <About />
    }
    ]);

export default router;