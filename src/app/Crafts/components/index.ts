import FloatingDock from "./FloatingDock";
import FileHover from "./FileHover";
import HoverNav from "./HoverNav";
import Swipe from "./tinder-swipe/Swipe";
import Snappy from "./snappy-slider/Snappy";
import FileDirectory from "./directory/FileDirectory";    

export const crafts = [
    {
        component: FloatingDock,
        title: "Floating Dock",
        badges: ["TailwindCSS", "Framer Motion"],
    },
    {
        component: FileDirectory,
        title: "File Directory",
        badges: ["React", "Tailwind CSS"],
    },
    {
        component: FileHover,
        title: "File Hover",
        badges: ["React", "Framer Motion"],
    },
    {
        component: HoverNav,
        title: "Hover Nav",
        badges: ["TailwindCSS", "Framer Motion"],
    },
    {
        component: Swipe,
        title: "Tinder Swipe",
        badges: ["React", "Framer Motion"],
    },
    {
        component: Snappy,
        title: "Snappy Slider",
        badges: ["React", "Tailwind CSS"],
    }
]