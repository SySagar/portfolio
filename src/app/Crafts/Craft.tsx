import { cn } from "@/lib/utils";
import InteractiveFrame from "./components/InteractiveFrame";
import { Badge } from "@/components/ui/badge";
import { PencilRuler } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { client } from "@/config/sanityClient";
import AnimateFrame from "@/layout/AnimateFrame";

type craftTypes = {
  title: string;
  technologies: string[];
  url: string;
};

const LoadingProjects = ()=>{
  return(
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

    const [crafts, setCrafts] = useState<craftTypes[]>([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
      const fetchCraftWork = async () => {
        setLoading(true);
        const crafts = await client.fetch('*[_type == "crafts"]');
        return crafts;
      };
      fetchCraftWork().then((craftsList: any) => {
        console.log(craftsList);
        setCrafts(
          craftsList.map((item: any) => ({
            title: item.title,
            technologies: item.technologies,
            url: item.url,
          }))
        );
      }).finally(()=>setLoading(false));
    }, []);

  return (
    <div
      className={cn(
        "flex justify-center flex-col gap-6 items-center min-h-screen px-8 py-6 pb-28"
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
      <div className="flex w-full ">
        <p className="text-white flex items-center font-light text-md lg:text-xl tracking-wider">
          <PencilRuler className="w-5 h-5 inline-block mr-2" />
        Experimental laboratory of user interactions
        </p>
      </div>
      <div className="flex flex-wrap md:gap-44">
      {loading ? 
      <div className="flex flex-wrap gap-8">
        <LoadingProjects />
        <LoadingProjects />
        <LoadingProjects />
      </div>
      : crafts.map((craft, index) => (
          
        <div key={index} className="flex flex-col gap-2 scale-[0.7] sm:scale-100 bg-[#1D1E1D] border-[#363736] mt-10 rounded-lg border">
        <InteractiveFrame src={craft.url} />

        <div className="pb-4 px-4 flex flex-col gap-3">

        <p className="text-white font-medium">{craft.title}</p>

        <div className="flex flex-wrap gap-2">
          {craft.technologies.map((tech, index) => (
            <Badge key={index} className="text-black bg-slate-100 hover:bg-slate-50">
              {tech}
            </Badge>
          ))}
        </div>
        </div>
      </div>
      
      ))}
      </div>
      </AnimateFrame>
    </div>
  );
}
