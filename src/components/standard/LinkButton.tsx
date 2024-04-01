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
    currentTab === value
      ? `bg-[${
          staticSelectedTabColor[value as keyof typeof staticSelectedTabColor]
        }]`
      : "";

  return (
    <div
      id={value}
      onClick={handleTabChange}
      {...props}
      className={cn(
        `border border-[#363736] rounded-xl flex justify-center items-center min-w-[55px] h-13`,
        bgColor,
        props.className
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <img className="w-8 h-8" src={icon} alt={text} />
          </TooltipTrigger>
          <TooltipContent>
            <p>{text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
