import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import styles from "../about.module.css";
import { cn } from "@/lib/utils";

const ImageWithLoading = ({ profilePic }: any) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    const img = new Image();
    img.src = profilePic;
    img.onload = handleImageLoad;
  }, [profilePic]);

  return (
    <div>
      {loading ? (
        <Skeleton className="rounded-lg relative object-cover w-[310px] h-[350px] sm:w-[410px] sm:h-[360px] lg:w-[510px] lg:h-[500px] bg-[#6D6D6D]" />
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
    </div>
  );
};

export default ImageWithLoading;
