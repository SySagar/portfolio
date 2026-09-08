import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import usetabStore, { type TabKey } from "@/store/tabStore";
import style from "./nav.module.css";

type LinkButtonProps = {
  icon: string;
  text: string;
  link: string;
  isNativeLink?: boolean;
  value: TabKey;
} & HTMLAttributes<HTMLDivElement>;

const tabColors: Record<TabKey, string> = {
  home: "bg-tabColorHome",
  projects: "bg-tabColorProjects",
  "about-me": "bg-tabColorAbout",
  github: "bg-tabColorGithub",
  leetcode: "bg-tabColorLeetcode",
  crafts: "bg-tabColorCrafts",
  twitter: "bg-tabColorTwitter",
  blogs: "bg-tabColorMedium",
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

  const bgColor = (value === currentTab && currentTab in tabColors)
    ? tabColors[currentTab]
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
