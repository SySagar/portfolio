import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Experience from "./components/Experience";
import { Separator } from "@radix-ui/react-separator";
import Carousel from "@/components/standard/Carousel";
import Skills from "./components/Skills";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, FileText, Twitter, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { client } from "@/config/sanityClient";
import { ExperienceProps } from "./components/Experience";
import { urlFor } from "@/utils/imageURLBuilder";
import { cn } from "@/lib/utils";
import AnimateFrame from "@/layout/AnimateFrame";
import styles from "./about.module.css";
import { Skeleton } from "@/components/ui/skeleton";
import { Helmet } from "react-helmet-async";

const softwares = [
  <img width={30} src="dribbble.png" alt="D" />,
  <img width={30} src="figma.png" alt="F" />,
  <img width={25} src="slack.png" alt="S" />,
  <img width={30} src="github.png" alt="G" />,
  <img width={30} src="discord.png" alt="D" />,
  <img width={30} src="chrome.png" alt="G" />,
  <img width={30} src="safari.png" alt="s" />,
  <img width={30} src="vs_code.png" alt="V" />,
  <img width={35} src="aws.png" alt="A" />,
  <img width={25} src="azure.png" alt="A" />,
  <img width={25} src="linux.png" alt="L" />,
  <img width={30} src="linkedin.png" alt="L" />,
  <img width={30} src="medium.png" alt="M" />,
  <img width={30} src="youtube.png" alt="Y" />,
  <img width={30} src="twitter.png" alt="T" />,
  <img width={30} src="spotify.png" alt="S" />,
  <img width={30} src="telegram.png" alt="T" />,
];

export default function About() {
  const [me, setMe] = useState({
    descriptionProfessional: "",
    descriptionPersonal: "",
  });
  const [experiences, setExperiences] = useState<ExperienceProps[]>([]);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    const fetchExperiences = async () => {
      const experiences = await client.fetch(
        '*[_type == "experience"] | order(publishedAt desc)'
      );
      return experiences;
    };

    fetchExperiences().then((experiencesList: any) => {
      setExperiences(
        experiencesList.map((experience: any) => ({
          company: experience.company,
          role: experience.role,
          date: experience.timeframe,
          description: experience.description,
          workLink: experience.url,
        }))
      );
    });
  }, []);

  useEffect(() => {
    const fetchAboutMe = async () => {
      const aboutMe = await client.fetch('*[_type == "about"]');
      return aboutMe[0];
    };

    fetchAboutMe().then((aboutMe: any) => {
      setMe({
        descriptionProfessional: aboutMe.descriptionProfessional,
        descriptionPersonal: aboutMe.descriptionPersonal,
      });
    });
  }, []);

  useEffect(() => {
    const fetchProfilePic = async () => {
      const profilePic = await client.fetch('*[_type == "profilePic"]');
      return profilePic[0].profilePic.asset._ref;
    };

    fetchProfilePic().then((pic: any) => {
      setProfilePic(urlFor(pic).url());
    });
  }, []);

  useEffect(() => {
    const fetchAchievements = async () => {
      const achievements = await client.fetch('*[_type == "achievement"]');
      return achievements[0];
    };

    fetchAchievements().then((achievementsList: any) => {
      setAchievements(achievementsList.achievements);
    });
  }, []);

  return (
    <div
      className={cn(
        "flex justify-center  gap-6 items-start px-40 py-10 pb-28",
        styles.container
      )}
    >
      <Helmet>
        <title>Soumya Sagar | About</title>
        <meta name="description" content="Soumya Sagar's Portfolio" />
        <meta
          name="keywords"
          content="Soumya Sagar, Sagar, Portfolio, Software Developer, India"
        />
        <link rel="canonical" href="/about-me" />
      </Helmet>
      <div className={cn("left sticky top-10", styles.left)}>
        <Card
          className={cn(
            "p-5 flex flex-col rounded-3xl items-start justify-center w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]",
            styles.leftCard
          )}
        >
          <CardTitle>
            {profilePic === "" ? (
              <Skeleton className="rounded-lg  object-cover w-[500px] h-[500px]  rounded-xl bg-[#6D6D6D]" />
            ) : (
              <img
                src={profilePic}
                alt="Me"
                className={cn(
                  "rounded-lg  object-cover w-[500px] h-[500px]",
                  styles.profilePic
                )}
              />
            )}
          </CardTitle>

          <CardContent className="mt-2 flex flex-col gap-3 text-white w-full px-2 py-5  ">
            <p className="text-xl md:text-2xl font-semibold">Hey again 👋</p>
            <p className="text-sm md:text-base text-[var(--secondaryText)] font-semibold">
              I am a software engineer with a passion for web development. I
              have experience in building web applications using React, Next and
              Node.js. Currently actively busy in open source development.
            </p>
          </CardContent>

          <div className="flex justify-center item-center gap-4 mt-4">
            <div className="text-black ml-2 bg-slate-100 hover:bg-slate-50 w-24 h-8 flex justify-center items-center gap-2 rounded-lg">
              <div>
                <MapPin style={{ width: 20 }} />
              </div>
              <p className="text-black text-sm">India</p>
            </div>

            <div className="mt-1 text-white font-semibold">
              {dayjs().format("MMMM D, h:mm A")}
            </div>
          </div>
        </Card>
      </div>
      <AnimateFrame>
        <div className="overflow-y-scroll no-scrollbar flex flex-col item-start  justify-start gap-5 ">
          <Card
            className={cn(
              "info-me p-5  rounded-3xl flex flex-col  items-start justify-center gap-3 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]",
              styles.info
            )}
          >
            <CardTitle className="text-white text-lg md:text-2xl">
              A little bit about me
            </CardTitle>
            <CardContent>
              <p className="text-sm md:text-base text-[var(--secondaryText)] font-normal">
                {me.descriptionProfessional}
                <br />
                <br />
                {me.descriptionPersonal}
              </p>
            </CardContent>
          </Card>

          <Card
            className={cn(
              "exp p-5  rounded-3xl flex flex-col  items-start justify-center gap-3 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]",
              styles.exp
            )}
          >
            <CardTitle className="text-white text-lg md:text-2xl">
              Experience
            </CardTitle>
            <CardContent>
              <div className="flex flex-col gap-2">
                {experiences.map((experience, index) => (
                  <div
                    className={`border-[var(--cardBorder)] py-4 ${
                      index != experiences.length - 1 ? `border-b-2` : ``
                    }`}
                  >
                    <Experience
                      key={index}
                      workLink={experience.workLink}
                      role={experience.role}
                      company={experience.company}
                      date={experience.date}
                      description={experience.description}
                    />
                    <Separator />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Skills />

          <Card
            className={cn(
              "achievements p-5  rounded-3xl flex flex-col  items-start justify-center gap-5 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]",
              styles.achievement
            )}
          >
            <CardTitle className="text-white text-lg md:text-2xl">
              Achievements
            </CardTitle>
            <CardContent>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-start items-center gap-2"
                >
                  <div className="text-white text-lg font-semibold"> • </div>
                  <div className="text-[var(--secondaryText)] text-sm font-semibold">
                    {achievement}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card
            className={cn(
              "softwares p-5  rounded-3xl flex flex-col  items-start justify-center gap-5 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]",
              styles.tech
            )}
          >
            <CardTitle className="text-white text-lg md:text-2xl">
              Software of choice
            </CardTitle>
            <CardContent>
              <Carousel list={softwares} />
            </CardContent>
          </Card>

          <Card
            className={cn(
              "quick-links p-5  rounded-3xl flex flex-col  items-start justify-center gap-5 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]",
              styles.links
            )}
          >
            <CardTitle className="text-white text-lg md:text-2xl">
              Come and say hi!
            </CardTitle>
            <CardContent className="w-full flex flex-col gap-2">
              <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-tabColorMail gap-4">
                <a
                  href="mailto:sysagar07@gmail.com"
                  className="flex justify-center items-center gap-3"
                >
                  <div>
                    <Mail className="w-4" />
                  </div>
                  <div className="text-md font-bold text-[15px]">
                    sysagar07@gmail.com
                  </div>
                </a>
              </Button>

              <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-tabColorTwitter gap-3">
                <a
                  href="https://twitter.com/SySagar2"
                  target="_blank"
                  className="flex justify-center items-center gap-3"
                >
                  <div>
                    <Twitter className="w-4" />
                  </div>
                  <div className="text-md font-bold text-[15px]">@SySagar2</div>
                </a>
              </Button>

              <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-[#FA5F55] gap-3">
                <a
                  href="https://www.instagram.com/lecifier/"
                  target="_blank"
                  className="flex justify-center items-center gap-3"
                >
                  <div>
                    <Instagram className="w-4" />
                  </div>
                  <div className="text-md font-bold text-[15px]">@lecifier</div>
                </a>
              </Button>

              <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-[#e57401] gap-3">
                <a
                  href="https://drive.google.com/file/d/1Bx4PVhM_12O2ZPLGABg64RErU4UX1E2c/view?usp=sharing"
                  target="_blank"
                  className="flex justify-center items-center gap-3"
                >
                  <div>
                    <FileText className="w-4" />
                  </div>
                  <div className="text-md font-bold text-[15px]">
                    resume.soumyasagar
                  </div>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </AnimateFrame>
    </div>
  );
}
