import style from "./home.module.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Eyes from "@/components/standard/Eyes";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import AnimateFrame from "@/layout/AnimateFrame";
import { Helmet} from 'react-helmet-async';

export default function Home() {
  const [toggleIcon, setToggleIcon] = useState(true);

  const handleChangeIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className={style.home}>
       <Helmet>
        <title>Soumya Sagar | Home</title>
        <meta name="description" content="Soumya Sagar's Portfolio" />
        <meta name="keywords" content="Soumya Sagar, Sagar, Portfolio, Software Developer, India" />
        <link rel="canonical" href="/" />
       </Helmet>
      <div className={cn("red-blob absolute right-32 top-0", style.redBlob)}>
        {/* <img src="greenBlob.png" style={{borderRadius:'55rem'}} width={'600px'}  alt="" /> */}
      </div>

      <div className="sanity-admin">
        <Button
          variant={"ghost"}
          className="absolute top-4 right-4 text-white font-medium hover:bg-transparent hover:text-slate-300"
          onClick={() => window.open("https://sysagar.sanity.studio/structure")}
        >
          <Shield className="mr-2" />
          Admin
        </Button>
      </div>

      <div className="logo absolute top-4 left-8">
        <div className={cn("relative", style.mylogo)}>
           <div className="brand">
            Sy
           </div>
        </div>
      </div>

      <AnimateFrame>
        <div className={cn("centralCard -translate-y-12", style.centralCard)}>
          <div
            className={cn(
              "absolute -translate-y-32 -translate-x-28 -rotate-6",
              style.p1
            )}
          >
            <img src="p1.png" width={210} alt="" />
          </div>

          <div
            className={cn(
              " absolute -translate-y-40 translate-x-64 rotate-6",
              style.p2
            )}
          >
            <img src="p2.png" width={210} alt="" />
          </div>

          <div
            className={cn(
              " absolute translate-y-40 translate-x-96 rotate-6",
              style.p4
            )}
          >
            <img src="p4.png" width={210} alt="" />
          </div>

          <div
            className={cn(
              "absolute translate-y-40 -translate-x-44 rotate-2 ",
              style.p3
            )}
          >
            <img src="p3.png" width={210} alt="" />
          </div>

          <div
            className={cn(
              "absolute translate-y-52 translate-x-28 -rotate-2",
              style.p3
            )}
          >
            <img src="p5.png" width={210} alt="" />
          </div>
          <Card
            className={cn(
              "p-6 backdrop-filter bg-opacity backdrop-blur-2xl border rounded-3xl bg-opacity-60  bg-[#1D1E1D] border-[#363736] pt-4 text-white",
              style.card
            )}
          >
            <CardHeader>
              <CardTitle
                className={cn(
                  "flex justify-center items-center text-3xl",
                  style.title
                )}
              >
                Hey, I'm
                <div className="text-white flex justify-center items-center pl-2  m-2 rounded-xl bg-[#9A63F5]">
                  <p>Sagar</p>
                  <div>
                    <img
                      className="w-[55px] relative top-1"
                      src="me.webp"
                      alt=""
                    />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <div
                className={cn(
                  "flex justify-center items-center text-3xl font-medium",
                  style.addInfo
                )}
              >
                I'm a
                <div className="text-white flex justify-center items-center font-semibold p-2  m-2 rounded-xl bg-[#F69851]">
                  Software Developer,
                </div>
              </div>
              <div
                className={cn(
                  "flex justify-center items-center text-3xl font-medium",
                  style.addInfo
                )}
              >
                currently based at
                <div className="text-white flex justify-center items-center p-2  m-2 rounded-xl bg-[#38a93b]">
                  India
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimateFrame>
    </div>
  );
}
