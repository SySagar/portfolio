import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Experience from "./components/Experience";
import { Separator } from "@radix-ui/react-separator";
import Carousel from "@/components/standard/Carousel";
import Skills from "./components/Skills";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, FileText, Twitter, Instagram, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { client } from "@/config/sanityClient";
import { ExperienceProps } from "./components/Experience";
import { urlFor } from "@/utils/imageURLBuilder";
import { cn } from "@/lib/utils";
import { fetchAndSortExperiences } from "@/lib/experienceUtils";
import AnimateFrame from "@/layout/AnimateFrame";
import styles from "./about.module.css";
import AnalogClock from 'analog-clock-react';
import { Helmet } from "react-helmet-async";
import ImageWithLoading from "./components/imgWithLoading";

export default function About() {
  const [me, setMe] = useState({
    descriptionProfessional: "",
    descriptionPersonal: "",
    customImage: "",
    email: "sysagar07@gmail.com",
    emailUrl: "mailto:sysagar07@gmail.com",
    twitterHandle: "@SySagar2",
    twitterUrl: "https://twitter.com/SySagar2",
    instagramHandle: "@lecifier",
    instagramUrl: "https://www.instagram.com/lecifier/",
    resumeLabel: "resume.soumyasagar",
    resumeUrl:
      "https://drive.google.com/file/d/1Bx4PVhM_12O2ZPLGABg64RErU4UX1E2c/view?usp=sharing",
  });
  const [experiences, setExperiences] = useState<ExperienceProps[]>([]);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    fetchAndSortExperiences().then((sorted: any) => setExperiences(sorted));
  }, []);

  let options = {
    width: "50px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#1D1E1D",
    centerColor: "#2e2e2e",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d81c7a",
      minute: "#ffffff",
      hour: "#ffffff"
    }
};

  useEffect(() => {
    const fetchAboutMe = async () => {
      const aboutMe = await client.fetch('*[_type == "about"]');
      return aboutMe?.[0] ?? {};
    };

    fetchAboutMe().then((aboutMe: any) => {
      setMe((prev) => ({
        ...prev,
        descriptionProfessional: aboutMe.descriptionProfessional ?? prev.descriptionProfessional,
        descriptionPersonal: aboutMe.descriptionPersonal ?? prev.descriptionPersonal,
        customImage: aboutMe.customImage
          ? urlFor(aboutMe.customImage.asset._ref).url()
          : prev.customImage,
        email: aboutMe.email ?? prev.email,
        emailUrl: aboutMe.emailUrl ?? prev.emailUrl,
        twitterHandle: aboutMe.twitterHandle ?? prev.twitterHandle,
        twitterUrl: aboutMe.twitterUrl ?? prev.twitterUrl,
        instagramHandle: aboutMe.instagramHandle ?? prev.instagramHandle,
        instagramUrl: aboutMe.instagramUrl ?? prev.instagramUrl,
        resumeLabel: aboutMe.resumeLabel ?? prev.resumeLabel,
        resumeUrl: aboutMe.resumeUrl ?? prev.resumeUrl,
      }));
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
    <>
      <div className="absolute top-4 right-4 z-50">
        <Button
          variant={"ghost"}
          className="text-white font-medium hover:bg-transparent hover:text-slate-300"
          onClick={() => window.open("https://sysagar.sanity.studio/structure")}
        >
          <Shield className="mr-2" />
          Admin
        </Button>
      </div>

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
          <ImageWithLoading profilePic={profilePic} />
          </CardTitle>

          <CardContent className="mt-2 flex flex-col gap-3 text-white w-full px-2 py-5  ">
            <p className="text-xl md:text-2xl font-semibold">Hey again 👋</p>
            <p className="text-sm md:text-base text-[var(--secondaryText)] font-semibold">
              All the victories belong to God, and all the failures are mine alone.
            </p>
          </CardContent>

          <div className="flex justify-center item-center gap-4 mt-4">
            <div className="text-black ml-2 bg-slate-100 hover:bg-slate-50 w-24 h-8 flex justify-center items-center gap-2 rounded-lg">
              <div>
                <MapPin style={{ width: 20 }} />
              </div>
              <p className="text-black text-sm">India</p>
            </div>

            <div className="mt-1 text-white font-semibold text-sm md:text-md flex flex-row gap-4">
              {dayjs().format("ddd MMM DD YYYY") }
              <div className="relative bottom-4">
              <AnalogClock {...options}  />
              </div>
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
   
              <p className="text-sm leading-6 md:text-base text-[var(--secondaryText)] font-normal  md:leading-8  ">
                {me.descriptionProfessional}
                {me.customImage && (
                  <img
                    src={me.customImage}
                    alt="custom"
                    className="ml-2  inline-block w-6 h-9 rounded-md object-cover align-middle overflow-hidden transition duration-200 ease-out hover:-translate-y-1 hover:rotate-0 rotate-[6deg] [transform:rotate(6deg)_translateZ(0)] [will-change:transform] shadow-[0_0_0_1px_rgba(255,255,255,0.08)] leading-6"
                  />
                )}
               
                <br />
                <br />
                <span dangerouslySetInnerHTML={{ __html: me.descriptionPersonal }} />
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
              <div className="flex flex-col gap-2 max-h-[400px] overflow-y-scroll no-scrollbar">
                {experiences.map((experience, index) => (
                  <div
                  key={index}
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

          {/* <Card
            className={cn(
              "softwares p-5  rounded-3xl flex flex-col  items-start justify-center gap-5 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]",
              styles.tech
            )}
          >
            <CardTitle className="text-white text-lg md:text-2xl">
              Software of choice
            </CardTitle>
            <CardContent className="w-full">
              <Carousel list={softwares} />
            </CardContent>
          </Card> */}

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
              <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-tabColorCrafts gap-4">
                <a
                  href="mailto:sysagar07@gmail.com"
                  className="flex justify-center items-center gap-3"
                >
                  <div>
                    <Mail className="w-4" />
                  </div>
                  <div className="text-md font-bold text-[15px]">{me.email}</div>
                </a>
              </Button>

              <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-tabColorTwitter gap-3">
                <a
                  href={me.twitterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center gap-3"
                >
                  <div>
                    <Twitter className="w-4" />
                  </div>
                  <div className="text-md font-bold text-[15px]">{me.twitterHandle}</div>
                </a>
              </Button>

              {/* <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-[#FA5F55] gap-3">
                <a
                  href={me.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center gap-3"
                >
                  <div>
                    <Instagram className="w-4" />
                  </div>
                  <div className="text-md font-bold text-[15px]">{me.instagramHandle}</div>
                </a>
              </Button> */}

              <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-[#e57401] gap-3">
                <a
                  href={me.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center gap-3"
                >
                  <div>
                    <FileText className="w-4" />
                  </div>
                  <div className="text-md font-bold text-[15px]">{me.resumeLabel}</div>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </AnimateFrame>
      </div>
    </>
  );
}
