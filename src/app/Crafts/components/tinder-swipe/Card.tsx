import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type cardType = {
  id: number;
  url: string;
};

const Card = ({
  id,
  url,
  cards,
  setCards,
}: {
  id: number;
  url: string;
  cards: cardType[];
  setCards: Dispatch<SetStateAction<cardType[]>>;
}) => {
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  const opacity = useTransform(
    springX,
    [-80, -60, 0, 60, 80],
    [0, 0.5, 1, 0.5, 0]
  );

  const rotateRaw = useTransform(springX, [-80, 80], [-18, 18]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(springX.get()) > 40) {
      setCards((prev) => prev.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.img
      className="h-72 w-60 object-cover rounded-lg origin-bottom hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x: springX,
        opacity,
        rotate,
        transition: "opacity 0.5s ease, transform 0.2s ease",
      }}
      id={id.toString()}
      src={url}
      alt="Placeholder"
      drag="x"
      onDragEnd={handleDragEnd}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
    />
  );
};

export default Card;
