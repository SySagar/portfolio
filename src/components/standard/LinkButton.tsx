import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { staticSelectedTabColor } from "@/lib/constants/TabColors";
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

export default function LinkButton({
  icon,
  text,
  link,
  isNativeLink = true,
  value,
  ...props
}: LinkButtonProps) {
  const [currentTab, setCurrentTab] = usetabStore((state: any) => [
    state.currentTab,
    state.setCurrentTab,
  ]);
  const navigate = useNavigate();

  const handleTabChange = () => {
    setCurrentTab(value);
    localStorage.setItem("currentTab", value);
    if (isNativeLink) navigate(link);
    else window.open(link, "_blank");
  };

  const bgColor =
    currentTab === "home" && value == currentTab
      ? "bg-tabColorHome"
      : currentTab === "projects" && value == currentTab
      ? "bg-tabColorProjects"
      : currentTab === "about" && value == currentTab
      ? "bg-tabColorAbout"
      : currentTab === "github" && value == currentTab
      ? "bg-tabColorGithub"
      : currentTab === "mail" && value == currentTab
      ? "bg-tabColorMail"
      : currentTab === "twitter" && value == currentTab
      ? "bg-tabColorTwitter"
      : "";

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
