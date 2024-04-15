import { BentoGrid, BentoGridItem } from "@/components/ui/bentoGrid";
import { Badge } from "@/components/ui/badge";
import { client } from "@/config/sanityClient";
import { useEffect, useState } from "react";
import { urlFor } from "@/utils/imageURLBuilder";
import AnimateFrame from "@/layout/AnimateFrame";

type projectTypes = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
  projectType: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<projectTypes[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
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
    });
  }, []);

  return (
    <div className="py-3 sm:py-7 pb-24">
      <AnimateFrame>
        <div>
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
                    <img
                      src={project.image}
                      alt={project.title}
                      width={project.projectType === "web" ? 400 : 150}
                      style={{
                        objectFit: "cover",
                        overflow: "hidden",
                        borderRadius: "6px",
                      }}
                    />
                  }
                />
              </a>
            ))}
          </BentoGrid>
        </div>
      </AnimateFrame>
    </div>
  );
}
