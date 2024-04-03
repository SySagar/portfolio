import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Experience from "./components/Experience";
import { Separator } from "@radix-ui/react-separator";
import Carousel from "@/components/standard/Carousel";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, FileText, Twitter, Instagram } from "lucide-react";

const experiences = [
  {
    workLink: "https://www.google.com",
    role: "Software Engineer",
    company: "Google",
    date: "2021 - Present",
    description:
      "I work on the Google Search team, building the next generation of search experiences.",
  },
  {
    workLink: "https://www.facebook.com",
    role: "Software Engineer Intern",
    company: "Facebook",
    date: "2020",
    description:
      "I worked on the Facebook Marketplace team, building features to improve the buying and selling experience.",
  },
  {
    workLink: "https://www.microsoft.com",
    role: "Software Engineer Intern",
    company: "Microsoft",
    date: "2019",
    description:
      "I worked on the Microsoft Teams team, building features to improve the collaboration experience.",
  },
];

const softwares = [
  <img width={30} src="behance.png" alt="B" />,
  // <img width={30} src="dribble.png" alt="D" />,
  <img width={30} src="figma.png" alt="F" />,
  <img width={30} src="slack.png" alt="S" />,
  <img width={30} src="github.png" alt="G" />,
  <img width={30} src="notion.png" alt="N" />,
  <img width={30} src="google.png" alt="Google" />,
  <img width={30} src="typescript.png" alt="T" />,
  <img width={30} src="reactjs.png" alt="R" />,
  <img width={30} src="nodejs.png" alt="N" />,
  <img width={30} src="linkedin.png" alt="L" />,
  <img width={30} src="medium.png" alt="M" />,
  <img width={30} src="youtube.png" alt="Y" />,
  <img width={30} src="twitter_x.png" alt="T" />,
  <img width={30} src="spotify.png" alt="S" />,
  <img width={30} src="telegram.png" alt="T" />,
];

export default function About() {
  return (
    <div className="flex justify-center  gap-6 items-start px-40 py-10 pb-28">
      <div className="left sticky top-10">
        <Card className="p-5 flex flex-col rounded-3xl items-start justify-center w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]">
          <CardTitle>
            <img
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Me"
              className="rounded-lg  object-cover w-[500px] h-[500px]"
            />
          </CardTitle>

          <CardContent className="mt-2 flex flex-col gap-3 text-white w-full px-2 py-5  ">
            <p className="text-2xl font-semibold">Hey again 👋</p>
            <p className="text-sm text-[var(--secondaryText)] font-semibold">
              I am a software engineer with a passion for web development. I
              have experience in building web applications using React and
              Node.js. I am currently working as a software engineer at Google.
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
      {    dayjs().format('MMMM D, h:mm A')}
          </div>
      </div>


        </Card>
      </div>
      <div className="overflow-y-scroll no-scrollbar flex flex-col item-start  justify-start gap-5 ">
        <Card className="info-me p-5  rounded-3xl flex flex-col  items-start justify-center gap-3 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]">
          <CardTitle className="text-white">A little bit about me</CardTitle>
          <CardContent>
            <p className="text-md text-[var(--secondaryText)] font-semibold">
              I am a software engineer with a passion for web development. I
              have experience in building web applications using React and
              Node.js. I am currently working as a software engineer at
              <a href="https://www.google.com">Google</a>.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              totam cumque, vero necessitatibus non eligendi eum quisquam libero
              eos voluptate voluptatem enim nisi dolorem doloremque dolores
              praesentium, quam eveniet veritatis! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ut corporis deleniti necessitatibus
              amet natus facilis omnis quod itaque perspiciatis rem odio
              quibusdam laudantium culpa libero consectetur saepe, beatae
              consequatur iste.
            </p>
          </CardContent>
        </Card>

        <Card className="exp p-5  rounded-3xl flex flex-col  items-start justify-center gap-3 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]">
          <CardTitle className="text-white">Experience</CardTitle>
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

        <Card className="softwares p-5  rounded-3xl flex flex-col  items-start justify-center gap-5 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]">
          <CardTitle className="text-white">Software of choice</CardTitle>
          <CardContent>
            <Carousel list={softwares} />
          </CardContent>
        </Card>

        <Card className="softwares p-5  rounded-3xl flex flex-col  items-start justify-center gap-5 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]">
          <CardTitle className="text-white">Come and say hi!</CardTitle>
          <CardContent className="w-full flex flex-col gap-2">
            <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-tabColorMail gap-4">
                  <a href="mailto:sysagar07@gmail.com"  className="flex justify-center items-center gap-3">
                  <div>
                    <Mail className="w-4" />
                  </div>
                  <div className="text-md font-bold text-[15px]">
                    sysagar07@gmail.com
                  </div>
                  </a>
            </Button>

            <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-tabColorTwitter gap-3">
                  <a href="https://twitter.com/SySagar2" target="_blank"  className="flex justify-center items-center gap-3">
                  <div>
                    <Twitter className="w-4" />
                  </div>
                  <div className="text-md font-bold text-[15px]">
                  @SySagar2
                  </div>
                  </a>
            </Button>

            <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-[#FA5F55] gap-3">
                  <a href="https://www.instagram.com/lecifier/" target="_blank" className="flex justify-center items-center gap-3">

                  <div>
                    <Instagram className="w-4" />
                  </div>
                  <div className="text-md font-bold text-[15px]">
                    @lecifier
                  </div>
                  </a>
            </Button>

            <Button className="w-full bg-[#262626] flex justify-center items-center hover:bg-[#e57401] gap-3">
                 <a href="https://drive.google.com/file/d/1Bx4PVhM_12O2ZPLGABg64RErU4UX1E2c/view?usp=sharing" target="_blank"  className="flex justify-center items-center gap-3">

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
    </div>
  );
}
