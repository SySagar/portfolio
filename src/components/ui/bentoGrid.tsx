import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[35rem] grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  technologies,
  github_url,
  image,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string | React.ReactNode;
  technologies?: string | React.ReactNode;
  github_url?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 pb-0 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="flex ">
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-400 text-sm mt-4 dark:text-neutral-300">
            {description}
          </div>
        </div>
        <a target="_blank" href={github_url}>
          <Github className="w-5 h-5 text-neutral-400 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-neutral-400 transition duration-200 relative top-8" />
        </a>
      </div>
      <div className="font-sans font-normal flex item-center justify-center  text-neutral-400 text-sm dark:text-neutral-300">
        {image}
      </div>
      <div className="font-sans font-normal text-neutral-400 text-sm dark:text-neutral-300">
        {technologies}
      </div>
    </div>
  );
};
