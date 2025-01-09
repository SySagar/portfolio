import { Card, CardContent } from "@/components/ui/card";
import LinkButton from "./LinkButton";
import { Separator } from "@/components/ui/separator";
import style from "./nav.module.css";

export default function BottomNav() {
  return (
    <div className="fixed bottom-4 w-full flex justify-center items-center ">
      <Card className="navBody h-[70px] sm:ml-6 bg-[#1D1E1D] backdrop-filter backdrop-blur-2xl bg-opacity-60 rounded-2xl border-[#363736]  flex flex-row justify-evenly items-evenly  text-white">
        <CardContent className="flex gap-2 p-2 mt-[1px] w-full">
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
            value="about-me"
            text="About me"
            link="/about-me"
          />

          <LinkButton
            className={style.tabColorCrafts}
            icon="crafts.png"
            value="crafts"
            text="Crafts"
            link="/crafts"
          />

          <Separator className={style.divider} orientation="vertical" />

          <LinkButton
            className={style.tabColorGithub}
            icon="github.svg"
            value="github"
            text="SySagar"
            link="https://github.com/SySagar"
            isNativeLink={false}
          />

          <LinkButton
            className={style.tabColorMedium}
            icon="medium.png"
            text="Soumya Sagar"
            link="https://medium.com/@sysagar07"
            value="blogs"
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
        </CardContent>
      </Card>
    </div>
  );
}
