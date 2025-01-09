import { cn } from "@/lib/utils";
import InteractiveFrame from "./components/InteractiveFrame";
import { Badge } from "@/components/ui/badge";
import { PencilRuler, GitPullRequestArrow } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { client } from "@/config/sanityClient";
import AnimateFrame from "@/layout/AnimateFrame";
import { crafts } from "./components";

type craftTypes = {
  title: string;
  technologies: string[];
  url: string;
};

const LoadingProjects = () => {
  return (
    <div className="flex flex-col gap-3 border w-fit  border-[#363736] p-4 rounded-3xl">
      <div className="flex flex-col gap-4">
        <Skeleton className="xl:w-[100px] lg:w-[150px] sm:w-[200px] h-[20px] w-[150px] rounded-xl bg-[#6D6D6D]" />
        <Skeleton className="xl:w-[200px] lg:w-[250px] sm:w-[300px] h-[30px] w-[250px] rounded-xl bg-[#6D6D6D]" />
      </div>
      <Skeleton className="xl:w-[350px] lg:w-[300px] sm:w-[350px] h-[50px] w-[300px] rounded-2xl bg-[#6D6D6D]" />

      <Skeleton className="xl:w-[350px] mt-7 lg:w-[300px] sm:w-[350px] h-[350px] w-[300px] rounded-2xl bg-[#6D6D6D]" />
    </div>
  )
};

export default function Craft() {
  const sandboxUrl =
    "https://codesandbox.io/embed/l8d8l3?view=preview&hidenavigation=1&hidedevtools=1&fontsize=12";


  return (
    <div
      className={cn(
        "flex justify-center flex-row gap-6 item-center min-h-screen px-8 py-6 pb-28"
      )}
    >
      <Helmet>
        <title>Soumya Sagar | Crafts</title>
        <meta name="description" content="Soumya Sagar's Portfolio" />
        <meta
          name="keywords"
          content="Soumya Sagar, Sagar, Portfolio, Software Developer, India"
        />
        <link rel="canonical" href="/crafts" />
      </Helmet>
      <AnimateFrame>
        <div className="flex w-full relative">
          <a
            href="https://gist.github.com/SySagar/62a202715125b32b5375807788844e5a" target="_blank" className="absolute flex gap-2 items-center right-2 top-0 text-white text-sm no-underline hover:underline hover:cursor-pointer">
            <GitPullRequestArrow className="w-4" />
            Open source contribution
          </a>
          <p className="text-white flex items-center font-light text-md lg:text-xl tracking-wider">
            <PencilRuler className="w-5 h-5 inline-block mr-2" />
            Experimental laboratory of user interactions
          </p>
        </div>
        <div className="flex flex-wrap md:gap-14 items-center justify-center">
          {
            crafts.map((craft, index) => (

              <div key={index} className="flex flex-col scale-[0.7] sm:scale-100 bg-[#1D1E1D] border-[#363736] mt-10 rounded-lg border">
                <InteractiveFrame Component={craft.component} />

                <div className="pb-4 px-4 flex flex-col gap-3">

                  <p className="text-white font-medium">{craft.title}</p>

                  <div className="flex flex-wrap gap-2">
                    {craft.badges.map((tech, index) => (
                      <Badge key={index} className="text-black bg-slate-100 hover:bg-slate-50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

            ))
          }
        </div>
      </AnimateFrame>
    </div>
  );
}
