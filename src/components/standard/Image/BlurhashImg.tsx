import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export type BlurhashImgProps = {
  src: string;
};

export default function BlurhashImg({ src }: BlurhashImgProps) {

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = handleImageLoad;
  }, [src]);


  return (
    <>   {loading ? (
      <Skeleton className="rounded-lg relative object-cover w-[300px] h-[200px] sm:w-[340px] sm:h-[260px] md:w-[340px] md:h-[260px] lg:w-[320px] lg:h-[260px] bg-[#6D6D6D]" />
    ) : (
      <img
        className="image"
        src={src}
        loading="lazy"
        width="100%"
        height="100%"
      />
    )}
    </>
  );
}
