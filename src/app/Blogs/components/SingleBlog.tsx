import AnimateFrame from "@/layout/AnimateFrame";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useParams, useLocation } from "react-router-dom";
import NotFound from "@/components/standard/NotFound";
import { decodeSlug } from "@/utils/decodeSlug";
import { useState, useEffect } from "react";
import styles from "../blogs.module.css";
import { cn } from "@/lib/utils";

export default function SingleBlog() {
  const [blog, setBlog] = useState({
    title: "",
    date: "",
    md: "",
    categories: [],
  });

  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  const data = location.state;
  useEffect(() => {
    if (data) {
      setBlog({
        title: data.title,
        date: data.date,
        md: data.md,
        categories: data.categories,
      });
    }
  }, []);

  if (!data && decodeSlug(slug as string) !== blog.title) return <NotFound />;

  return (
    <div>
      <AnimateFrame>
        <div className="flex flex-col gap-8 justify-center items-center py-10  rounded-lg duration-150">
          <div className="flex flex-row gap-2 justify-center w-full items-center">
            <h1 className="lg:text-4xl md:text-2xl text-lg text-center font-bold text-white">{blog.title}</h1>
          </div>
          <div className="flex flex-row w-full justify-end text-xs md:text:md lg:text-lg px-6 sm:px-20 md:px-28">
            <p className="text-md text-gray-400">{blog.date}</p>
          </div>
          <div 
          style={{
            marginInline: "18rem",
          }}
          className={cn("flex flex-row gap-4 text-white bg-[#000] justfiy-center items-center",styles.markdown)}>
            <MarkdownPreview
              source={blog.md}
              className={cn('markdown')}
              rehypeRewrite={(node: any, index, parent: any) => {
                // styles to h3, h4, h5, h6 tags
                if (node.tagName && /^h(3|4|5|6)/.test(node.tagName)) {
                  if (!node.properties) {
                    node.properties = {};
                  }
                  const fontSize = window.innerWidth <= 700 ? '18px' : '25px';
                  node.properties.style =
                    `font-weight: bold; color:#fff; font-size: ${fontSize};`;
                }
                if (node.tagName === "pre") {
                  if (!node.properties) {
                    node.properties = {};
                  }
                  const width = window.innerWidth <= 500? '250px' : window.innerWidth <= 700 ? '375px' : window.innerWidth <= 900 ?'600px':'800px';
                  node.properties.style =
                    `background: #2d2d2d; color: #cccccc; padding: 20px; border-radius: 5px; font-family: 'Courier New', Courier, monospace; width: ${width}; overflow-x: auto;`;
                }
                if (node.tagName === "p") {
                  if (!node.properties) {
                    node.properties = {};
                  }
                  const fontSize = window.innerWidth <= 700 ? '12px' : '15px';
                  node.properties.style =
                    `font-size: ${fontSize}; line-height: 1.6; color: #cccccc;`;
                }
                if (node.tagName == "figure") {
                  if (!node.properties) {
                    node.properties = {};
                  }
                  node.properties.style = "padding-block: 30px;  ";
                }
              }}
              style={{
                background: "#1B1B1B",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
              }}
            />
          </div>

          <div className="categories flex flex-row gap-2 pt-6 w-full justify-center flex-wrap">
            {blog.categories.map((category, index) => (
              <span
                key={index}
                className="text-white text-xs sm:text-sm p-1 px-3 font-semibold rounded-2xl bg-[#F1F5F9] text-[#000]"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </AnimateFrame>
    </div>
  );
}
