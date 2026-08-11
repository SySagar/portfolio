"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export type ExperienceProps = {
  company: string;
  role: string;
  date: string;
  description: string;
  workLink: string;
};

export default function Experience({
  workLink,
  role,
  date,
  company,
  description,
}: ExperienceProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <div
          className="group flex flex-col gap-[7px] rounded-3xl  transition duration-200"
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
        >

            <a href={workLink} target="_blank" rel="noreferrer" className="flex items-center justify-between w-fit">
              <Button className="flex flex-row gap-1 hover:bg-slate-200 hover:text-tabColorGithub bg-[#262626] p-0 px-2">
                <p>{company}</p>
                <div>
                  <ArrowUpRight />
                </div>
              </Button>
            </a>
          

          <div className="role-time flex items-center justify-between gap-1 text-white font-semibold text-sm sm:text-base">
            <div className="flex flex-row gap-1">
              <p>{role}</p>
              <div>•</div>
              <p>{date}</p>
            </div>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="desc text-[var(--secondaryText)] text-sm font-semibold leading-6 mt-3">
        <p>{description}</p>
      </CollapsibleContent>
    </Collapsible>
  );
}
