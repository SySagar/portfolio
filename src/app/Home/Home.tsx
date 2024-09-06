import style from "./home.module.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Eyes from "@/components/standard/Eyes";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import AnimateFrame from "@/layout/AnimateFrame";
import { Helmet} from 'react-helmet-async';

export default function Home() {

  const transitionSettings = {
    type: "spring",
    stiffness: 300,
    damping: 40,
    duration: 1,
  };



  const pictureVariants = (x:number, y:number, rotate:number)=> ({
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      x: x,
      y: y,
      rotate: rotate,
      scale: 1,
      transition: transitionSettings,
    },
  });

  return (
    <div className={style.home}>
       <Helmet>
        <title>Soumya Sagar | Home</title>
        <meta name="description" content="Soumya Sagar's Portfolio" />
        <meta name="keywords" content="Soumya Sagar, Sagar, Portfolio, Software Developer, India" />
        <link rel="canonical" href="/" />
       </Helmet>
      <div className="bgfilter">
      </div>

      <div className="blob1  sm:left-[150px] left-[-350px]"></div>
      
      <div className="blob2 sm:left-[950px] left-[-350px] sm:top-[-80px] "></div>
      
      <div className="blob3 sm:top-[380px] sm:left-[800px] top-[400px] left-[80px]"></div>

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
        <motion.div 
         initial="hidden"
         whileHover="visible"
        className={cn("centralCard -translate-y-12", style.centralCard)}>
          <motion.div
            className={cn(
              "absolute",
              style.p1
            )}
            variants={pictureVariants(-120, -130, -6)}
          >
            <img src="p1.png" width={210} alt="" />
          </motion.div>

          <motion.div
            className={cn("absolute", style.p2)}
        variants={pictureVariants(280, -150, 6)}
          >
            <img src="p2.png" width={210} alt="" />
          </motion.div>

          <motion.div
            className={cn("absolute", style.p4)}
            variants={pictureVariants(360, 180, 6)}
          >
            <img src="p4.png" width={210} alt="" />
          </motion.div>

          <motion.div
             className={cn("absolute", style.p3)}
             variants={pictureVariants(-160, 150, 2)}
          >
            <img src="p3.png" width={210} alt="" />
          </motion.div>

          <motion.div
             className={cn("absolute", style.p5)}
             variants={pictureVariants(100, 200, -2)}
          >
            <img src="p5.png" width={210} alt="" />
          </motion.div>
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
        </motion.div>
      </AnimateFrame>
    </div>
  );
}
