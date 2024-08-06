import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import usetabStore from "@/store/tabStore";
import style from "./nav.module.css";

type LinkButtonProps = {
  icon: string;
  text: string;
  link: string;
  isNativeLink?: boolean;
  value: string;
} & HTMLAttributes<HTMLDivElement>;

const bgColorMapping: { [key: string]: string } = {
  home: "bg-tabColorHome",
  projects: "bg-tabColorProjects",
  about: "bg-tabColorAbout",
  github: "bg-tabColorGithub",
  crafts: "bg-tabColorCrafts",
  twitter: "bg-tabColorTwitter",
  medium: "bg-tabColorMedium",
};


export default function LinkButton({
  icon,
  text,
  link,
  isNativeLink = true,
  value,
  ...props
}: LinkButtonProps) {
  const [currentTab, setCurrentTab] = usetabStore();
  const navigate = useNavigate();

  const handleTabChange = () => {
    setCurrentTab(value);
    if (isNativeLink) navigate(link);
    else window.open(link, "_blank");
  };

      const bgColor =
      currentTab === "home" && value == currentTab
        ? "bg-tabColorHome"
        : currentTab === "projects" && value == currentTab
        ? "bg-tabColorProjects"
        : currentTab === "about-me" && value == currentTab
        ? "bg-tabColorAbout"
        : currentTab === "github" && value == currentTab
        ? "bg-tabColorGithub"
        : currentTab === "crafts" && value == currentTab
        ? "bg-tabColorCrafts"
        : currentTab === "twitter" && value == currentTab
        ? "bg-tabColorTwitter"
        : currentTab === "blogs" && value == currentTab
        ? "bg-tabColorMedium"
        :"";

  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <div
          id={value}
          onClick={handleTabChange}
          {...props}
          className={cn(
            "relative border border-[#363736] rounded-xl flex justify-center items-center min-w-[50px] h-12",
            bgColor,
            props.className
          )}
        >
          <div className={`${currentTab === value ? style.active : ""}`}></div>

          <TooltipTrigger>
            <img className="w-6 h-6" src={icon} alt={text} />
          </TooltipTrigger>
          <TooltipContent>
            <p>{text}</p>
          </TooltipContent>
        </div>
      </Tooltip>
    </TooltipProvider>
  );
}
