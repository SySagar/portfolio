import { BentoGrid, BentoGridItem } from "@/components/ui/bentoGrid";
import { Badge } from "@/components/ui/badge";
import { client } from "@/config/sanityClient";
import { useEffect, useState } from "react";
import { urlFor } from "@/utils/imageURLBuilder";
import AnimateFrame from "@/layout/AnimateFrame";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "@/components/ui/skeleton";
import Image from '../../components/standard/Image';

type projectTypes = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
  projectType: string;
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

export default function Projects() {
  const [projects, setProjects] = useState<projectTypes[]>([]);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const projects = await client.fetch('*[_type == "project"]');
      return projects;
    };
    fetchPosts().then((projectsList: any) => {
      console.log(projectsList);
      setProjects(
        projectsList.map((project: any) => ({
          title: project.title,
          description: project.description,
          image: urlFor(project.mainImage.asset._ref).url(),
          technologies: project.technologies,
          url: project.url,
          projectType: project.type,
        }))
      );
    }).finally(()=>setLoading(false));
  }, []);


  return (
    <div className="py-4 sm:py-7 mb-16">
      <Helmet>
        <title>Soumya Sagar | Projects</title>
        <meta name="description" content="Soumya Sagar's Portfolio" />
        <meta
          name="keywords"
          content="Soumya Sagar, Sagar, Portfolio, Software Developer, India"
        />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <AnimateFrame>
        <div>
          {loading ? 
          <BentoGrid>{

            Array.from({ length: 5 }).map((_,idx) => 
            <LoadingProjects key={idx} />
            )
          }
          </BentoGrid>
          : 
            <>
            <BentoGrid>
            {projects.map((project) => (
              <a href={project.url} target="_blank">
                <BentoGridItem
                  className="p-6 backdrop-filter backdrop-blur-2xl xl:w-[400px] lg:w-[350px] sm:w-[400px] h-[550px] w-[350px] border rounded-3xl bg-[#1D1E1D] border-[#363736] pt-4 text-white"
                  title={<p className="text-white text-xl">{project.title}</p>}
                  description={project.description}
                  icon={<div>Icon</div>}
                  technologies={
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge className="text-black bg-slate-100 hover:bg-slate-50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  }
                  image={
                    <Image src={project.image} />
              
                  }
                />
              </a>
            ))}
          </BentoGrid>
            </>
          }
        </div>
      </AnimateFrame>
    </div>
  );
}
