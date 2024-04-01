import { Card, CardContent } from "@/components/ui/card";
import LinkButton from "./LinkButton";
import { Separator } from "@/components/ui/separator";
import style from "./nav.module.css";

export default function BottomNav() {
  return (
    <div className="fixed bottom-8 w-full flex justify-center items-center">
      <Card className="w-1/3 h-[70px] bg-[#1D1E1D] rounded-2xl border-[#363736]  flex flex-row justify-evenly items-evenly  text-white">
        <CardContent className="flex gap-4 p-2 w-full">
          <LinkButton
            className={style.tabColorHome}
            icon="home.svg"
            text="Home"
            link="/"
            value={"home"}
          />
          <LinkButton
            className={style.tabColorProjects}
            icon="projects.svg"
            text="Projects"
            link="/projects"
            value={"projects"}
          />
          <LinkButton
            className={`${style.tabColorAbout}`}
            icon="about.svg"
            value="about"
            text="About me"
            link="/about-me"
          />

          <Separator orientation="vertical" />

          <LinkButton
            className={style.tabColorGithub}
            icon="github.svg"
            value="github"
            text="SySagar"
            link="https://github.com/SySagar"
            isNativeLink={false}
          />
          <LinkButton
            className={style.tabColorMail}
            icon="mail.svg"
            value="mail"
            text="sysagar07@gmail.com"
            link="mailto:sysagar07@gmail.com"
            isNativeLink={false}
          />
          <LinkButton
            className={style.tabColorTwitter}
            icon="x.svg"
            value="twitter"
            text="@SySagar2"
            link="https://twitter.com/SySagar2"
            isNativeLink={false}
          />
          <LinkButton
            className={style.tabColorMedium}
            icon="medium.png"
            text="Soumya Sagar"
            link="https://medium.com/@sysagar07"
            value={"medium"}
            isNativeLink={false}
          />
        </CardContent>
      </Card>
    </div>
  );
}
