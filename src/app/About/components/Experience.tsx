import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type ExperienceProps = {
  workLink: string;
  role: string;
  company: string;
  date: string;
  description: string;
};

export default function Experience({
  workLink,
  role,
  date,
  company,
  description,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-[7px]">
      <div className="work-link">
        <a href={workLink} target="_blank">
          <Button className="flex flex-row gap-1 hover:bg-slate-200 hover:text-tabColorGithub bg-[#262626] p-0 px-2">
            <p>{company}</p>
            <div>
              <ArrowUpRight />
            </div>
          </Button>
        </a>
      </div>

      <div className="role-time flex flex-row gap-1 text-white font-semibold text-md">
        <p>{role}</p>
        <div>•</div>
        <p>{date}</p>
      </div>

      <div className="desc text-[var(--secondaryText)] text-sm font-semibold">
        {description}
      </div>
    </div>
  );
}
