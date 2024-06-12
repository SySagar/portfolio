import React, { useEffect, useState } from "react";
import AnimateFrame from "@/layout/AnimateFrame";
import APIMethods from "@/lib/axios";
import blogStyles from "./blogs.module.css";
import { dateFormatter } from "@/utils/dateFormatter";
import { Helmet } from "react-helmet-async";
import {ExternalLink} from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton";

export default function Blogs() {
  const [blogs, setBlogs] = useState([
    {
      title: "",
      date: "",
      url: "",
    },
  ]);

  useEffect(() => {
    try {
      APIMethods.blogs.getMediumData().then((res) => {
        console.log(res);
        setBlogs(
          res.data.items.map((blog: any) => ({
            title: blog.title,
            date: blog.pubDate,
            url: blog.link,
          }))
        );
      });
    } catch (error) {
        console.log(error);
    }
  }, []);

  return (
    <div className={blogStyles.blogs}>
      <Helmet>
        <title>Soumya Sagar | Blogs</title>
        <meta name="description" content="Soumya Sagar's Portfolio" />
        <meta
          name="keywords"
          content="Soumya Sagar, Sagar, Portfolio, Software Developer, India"
        />
        <link rel="canonical" href="/blogs" />
      </Helmet>
      <AnimateFrame>
        <div
          className="flex flex-col justify-top"
          style={{
            minWidth: "60vw",
          }}
        >
          <div className="blogList flex flex-col ">
            {blogs ? blogs.slice().reverse().map((blog, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 justify-center items-center py-10 hover:bg-[#434443] rounded-lg duration-150"
              >
                <div className="flex flex-row gap-4 justfiy-between items-center">
                    <div  className="text-[#FDFDFD] font-semibold text-xl">
                    {blog.title}
                    </div>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noreferrer"
                >
                <ExternalLink size={22} color="#FDFDFD" />
                </a>
                
                </div>
                <p className="text-[#FDFDFD] text-sm">{dateFormatter(blog.date)}</p>
              </div>
            ))
                :
                <div className="text-[#FDFDFD] flex flex-col gap-4 mt-8">
                    <Skeleton className=" py-10 rounded-xl bg-[#6D6D6D]" />
                    <Skeleton className=" py-10 rounded-xl bg-[#6D6D6D]" />
                    <Skeleton className=" py-10 rounded-xl bg-[#6D6D6D]" />
                    <Skeleton className=" py-10 rounded-xl bg-[#6D6D6D]" />
                </div>
        }
          </div>
        </div>
      </AnimateFrame>
    </div>
  );
}
